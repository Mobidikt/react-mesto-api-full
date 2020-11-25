const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const BadRequestError = require('../middlewares/errors/BadRequestError');
const UnauthorizedError = require('../middlewares/errors/UnauthorizedError');
const NotFoundError = require('../middlewares/errors/NotFoundError');
const ConflictError = require('../middlewares/errors/ConflictError');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    return res.status(200).send(users);
  } catch (err) {
    return next();
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id);
    if (!user) {
      return next(new NotFoundError('Нет пользователя с таким id'));
    }
    return res.status(200).send(user);
  } catch (err) {
    if (err.name === 'CastError') {
      return next(new BadRequestError('Переданы некорректные данные'));
    }
    return next();
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return next(new NotFoundError('Нет пользователя с таким id'));
    }
    return res.status(200).send(user);
  } catch (err) {
    if (err.name === 'CastError') {
      return next(new BadRequestError('Переданы некорректные данные'));
    }
    return next();
  }
};

const createUser = async (req, res, next) => {
  let hashedPassword;
  const { email, password } = req.body;
  if (!email || !password || !password.trim()) {
    return next(new BadRequestError('Переданы некорректные данные'));
  }
  const user = await User.findOne({ email });
  if (user) {
    return next(new ConflictError('Уже есть пользователь с таким email'));
  }
  try {
    hashedPassword = await bcrypt.hash(req.body.password, 10);
  } catch (err) {
    return next();
  }
  try {
    const { name, about, avatar } = req.body;
    const newUser = await User.create({
      name,
      about,
      avatar,
      email,
      password: hashedPassword,
    });
    return res.status(200).send({
      name: newUser.name,
      about: newUser.about,
      avatar: newUser.avatar,
      email: newUser.email,
    });
  } catch (err) {
    return next();
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new BadRequestError('Неверные данные'));
  }
  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return next(new UnauthorizedError('Нет пользователя с таким email'));
    }
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return next(new UnauthorizedError('Неправильный пароль'));
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN, {
      expiresIn: '7d',
    });
    return res.status(200).send({ token, email });
  } catch (err) {
    return next(new UnauthorizedError('Некоректные данные'));
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { name, about } = req.body;
    const updateInfo = await User.findByIdAndUpdate(
      req.user._id,
      { name, about },
      {
        new: true,
        runValidators: true,
      },
    ).orFail();
    return res.status(200).send(updateInfo);
  } catch (err) {
    if (err.name === 'CastError') {
      return next(new NotFoundError('Нет пользователя с таким id'));
    }
    if (err.name === 'ValidationError') {
      return next(new BadRequestError('Переданы некорректные данные'));
    }
    return next();
  }
};

const updateUserAvatar = async (req, res, next) => {
  try {
    const { avatar } = req.body;
    const newAvatar = await User.findByIdAndUpdate(
      req.user._id,
      { avatar },
      {
        new: true,
        runValidators: true,
      },
    ).orFail();
    return res.status(200).send(newAvatar);
  } catch (err) {
    if (err.name === 'CastError') {
      return next(new NotFoundError('Нет пользователя с таким id'));
    }
    if (err.name === 'ValidationError') {
      return next(new BadRequestError('Переданы некорректные данные'));
    }
    return next();
  }
};

module.exports = {
  getUsers,
  getUser,
  getUserById,
  createUser,
  login,
  updateUser,
  updateUserAvatar,
};

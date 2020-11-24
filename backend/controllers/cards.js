const BadRequestError = require('../middlewares/errors/BadRequestError');
const ForbiddenError = require('../middlewares/errors/ForbiddenError');
const NotFoundError = require('../middlewares/errors/NotFoundError');
const Card = require('../models/card');

const getCards = async (req, res, next) => {
  try {
    const cards = await Card.find({});
    return res.status(200).send(cards);
  } catch (err) {
    return next();
  }
};

const createCard = async (req, res, next) => {
  try {
    const { name, link } = req.body;
    const card = await Card.create({ name, link, owner: req.user._id });
    return res.status(200).send(card);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new BadRequestError('Неверная ссылка'));
      // return res.status(400).send({ message: 'Неверная ссылка' });
    }
    return next();
    // return res.status(500).send({ message: 'Ошибка на сервере' });
  }
};

const deleteCard = async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.cardId);
    if (card.owner === req.user._id) {
      throw new ForbiddenError('Недостаточно прав');
    } else {
      await Card.findByIdAndDelete(req.params.cardId).orFail();
      return res.status(200).send({ message: 'Карточка удалена' });
    }
  } catch (err) {
    if (err.name === 'CastError') {
      return next(new BadRequestError('Переданы некорректные данные'));
    }
    if (err.name === 'DocumentNotFoundError') {
      return next(new NotFoundError('Нет карточки с таким id'));
      // return res.status(404).send({ message: 'Нет карточки с таким id' });
    }
    return next();
  }
};

const likeCard = async (req, res, next) => {
  try {
    const likes = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    ).orFail();
    return res.status(200).send({ data: likes });
  } catch (err) {
    if (err.name === 'CastError') {
      return next(new BadRequestError('Переданы некорректные данные'));
    }
    if (err.name === 'DocumentNotFoundError') {
      return next(new NotFoundError('Нет карточки с таким id'));
    }
    return next();
  }
};

const dislikeCard = async (req, res, next) => {
  try {
    const likes = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true },
    ).orFail();
    return res.status(200).send({ data: likes });
  } catch (err) {
    if (err.name === 'CastError') {
      return next(new BadRequestError('Переданы некорректные данные'));
    }
    if (err.name === 'DocumentNotFoundError') {
      return next(new NotFoundError('Нет карточки с таким id'));
      // return res.status(404).send({ message: 'Нет карточки с таким id' });
    }
    return next();
  }
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};

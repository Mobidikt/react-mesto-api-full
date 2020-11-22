const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index.js');
const auth = require('./middlewares/auth');
const {
  validationUser,
  validationCard,
  validationParams,
  validationUserInfo,
  validationUserAvatar,
} = require('./middlewares/validation');

const {
  createUser,
  login,
  getUser,
  getUsers,
  getUserById,
  updateUser,
  updateUserAvatar,
} = require('./controllers/users.js');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('./controllers/cards.js');

const { PORT = 3000 } = process.env;
const app = express();

const mongoDbUrl = 'mongodb://localhost:27017/mestodb';
const mongoConnectOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose
  .connect(mongoDbUrl, mongoConnectOptions)
  .then(() => {
    console.log('База данных подключена');
  })
  .catch((err) => {
    console.log(`Ошибка при подключении базы данных: ${err}`);
  });

// app.use((req, res, next) => {
//   req.user = { _id: '5fa41805d8f2932594af3049' };
//   next();
// });
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('/sign-in', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});
app.get('/sign-up', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.post('/signin', validationUser, bodyParser.json(), login);
app.post('/signup', validationUser, bodyParser.json(), createUser);
// app.use(auth);
app.get('/users/me', auth, getUser);
app.get('/users', auth, getUsers);
app.get('/users/:userId', validationParams, auth, getUserById);

app.patch('/users/me', validationUserInfo, auth, bodyParser.json(), updateUser);
app.patch(
  '/users/me/avatar',
  validationUserAvatar,
  auth,
  bodyParser.json(),
  updateUserAvatar,
);

app.get('/cards', auth, getCards);
app.post('/cards', validationCard, auth, bodyParser.json(), createCard);
app.delete('/cards/:cardId', validationParams, auth, deleteCard);
app.put('/cards/likes/:cardId', validationParams, auth, likeCard);
app.delete('/cards/likes/:cardId', validationParams, auth, dislikeCard);

app.use(routes);

app.listen(PORT, () => console.log(`server port ${PORT}`));

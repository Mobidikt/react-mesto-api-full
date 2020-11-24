require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const { errors } = require('celebrate');
const cors = require('cors');
const routes = require('./routes/index.js');
const { validationUser } = require('./middlewares/validation');
const { createUser, login } = require('./controllers/users.js');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./middlewares/errors/NotFoundError.js');

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

app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', validationUser, bodyParser.json(), login);
app.post('/signup', validationUser, bodyParser.json(), createUser);

app.use(routes);
app.use(() => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});
app.use(errorLogger);
app.use(errors());
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message || 'На сервере произошла ошибка' });
  next();
});
// app.use((req, res) => {
//   res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
// });
app.listen(PORT, () => console.log(`server port ${PORT}`));

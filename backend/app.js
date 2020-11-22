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

const { PORT = 3000 } = process.env;
const app = express();

const corsOptions = {
  origin: [
    'https://api.mobidikt.students.nomoreparties.co',
    'https://www.api.mobidikt.students.nomoreparties.co',
    'https://www.mobidikt.students.nomoreparties.co',
    'https://mobidikt.students.nomoreparties.co',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'x-access-token'],
  credentials: true,
};

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

// app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.get('/sign-in', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
// });
// app.get('/sign-up', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
// });
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
// });

app.use(requestLogger);
app.use('*', cors(corsOptions));
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', validationUser, bodyParser.json(), login);
app.post('/signup', validationUser, bodyParser.json(), createUser);

app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use((err, req, res) => {
  res
    .status(err.statusCode || 500)
    .send({ message: err.message || 'На сервере произошла ошибка' });
});
app.listen(PORT, () => console.log(`server port ${PORT}`));

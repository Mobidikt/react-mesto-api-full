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
//const cors = require('./middlewares/cors');

const { PORT = 3000 } = process.env;
const app = express();

// const corsOptions = {
//   origin: [
//     'https://www.mobidikt.students.nomoreparties.co',
//     'http://www.mobidikt.students.nomoreparties.co',
//     'https://mobidikt.students.nomoreparties.co/sign-up',
//     'https://mobidikt.students.nomoreparties.co/sign-up',
//     'http://mobidikt.students.nomoreparties.co',
//   ],
//   methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
//   allowedHeaders: ['Content-Type', 'origin', 'x-access-token'],
//   credentials: true,
// };

// const whiteList = [
//   'https://www.mobidikt.students.nomoreparties.co',
//   'http://www.mobidikt.students.nomoreparties.co',
//   'https://mobidikt.students.nomoreparties.co',
//   'http://mobidikt.students.nomoreparties.co',
//   'http://localhost:3000',
// ];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whiteList.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(null, false);
//     }
//   },
//   credentials: true,
// };

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
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept',
//   );
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');

//   console.log(res.header);
//   next();
// });

// const allowedCors = [
//   'https://www.mobidikt.students.nomoreparties.co',
//   'http://www.mobidikt.students.nomoreparties.co',
//   'https://mobidikt.students.nomoreparties.co',
//   'http://mobidikt.students.nomoreparties.co',
//   'http://localhost:3000',
// ];

// app.use((req, res, next) => {
//   const { origin } = req.headers; // Записываем в переменную origin соответствующий заголовок
//   if (allowedCors.includes(origin)) {
//     // Проверяем, что значение origin есть среди разрешённых доменов
//     res.header('Access-Control-Allow-Origin', origin);
//   }
//   next();
// });

app.use(cors());
// app.use(cors(corsOptions));
// app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '../frontend/build')));
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
app.use((err, req, res, _) => {
  console.log('ERROR', err);
  if ([].length) {
    _();
  }
  res
    .status(err.statusCode || 500)
    .send({ message: err.message || 'На сервере произошла ошибка' });
});
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
app.listen(PORT, () => console.log(`server port ${PORT}`));

const express = require('express');
const routes = require('./routes/index.js');
const router = require('express').Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auth = require('./middlewares/auth');
const path = require('path');
const {
  createUser,
  login,
} = require('./controllers/users.js');
const { PORT = 3000 } = process.env;
const app = express();

const mongoDbUrl = 'mongodb://localhost:27017/mestodb';
const mongoConnectOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(mongoDbUrl, mongoConnectOptions)
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
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// app.post('/sign-in', bodyParser.json(), login);
// app.post('/sign-up', bodyParser.json(), createUser);
// // app.use('/');
app.use(auth);
app.use(routes);



app.listen(PORT, () => console.log(`server port ${PORT}`));

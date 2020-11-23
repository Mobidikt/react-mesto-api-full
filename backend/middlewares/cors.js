const cors = require('cors');

const allowedCors = [
  'https://www.mobidikt.students.nomoreparties.co',
  'http://www.mobidikt.students.nomoreparties.co',
  'https://mobidikt.students.nomoreparties.co',
  'http://mobidikt.students.nomoreparties.co',
  'http://localhost:3000',
];

module.exports = async (req, res, next) => {
  const { origin } = req.headers; // Записываем в переменную origin соответствующий заголовок
  if (allowedCors.includes(origin)) {
    // Проверяем, что значение origin есть среди разрешённых доменов
    res.header('Access-Control-Allow-Origin', origin);
  }
  return next();
};

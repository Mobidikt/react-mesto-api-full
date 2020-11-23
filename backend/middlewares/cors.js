const cors = require('cors');

const allowedCors = [
  'https://www.mobidikt.students.nomoreparties.co',
  'http://www.mobidikt.students.nomoreparties.co',
  'https://mobidikt.students.nomoreparties.co',
  'http://mobidikt.students.nomoreparties.co',
  'http://localhost:3000',
];

// module.exports = async (req, res, next) => {
//   const { origin } = req.headers;
//   console.log(res.headers); // Записываем в переменную origin соответствующий заголовок
//   if (allowedCors.includes(origin)) {
//     console.log('if', origin);
//     // Проверяем, что значение origin есть среди разрешённых доменов
//     res.header('Access-Control-Allow-Origin', origin); //allowedCors);
//   }
//   console.log('else', origin);
//   console.log(res.header);
//   return next();
// };

module.exports = async (req, res, next) => {
  // const { origin } = req.headers;
  console.log(res.headers); // Записываем в переменную origin соответствующий заголовок
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
  res.header('Content-Security-Policy', "default-src 'none'");

  console.log(res.header);
  return next();
};

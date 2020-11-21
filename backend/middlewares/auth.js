const jwt = require('jsonwebtoken');

const handleAuthError = (res) => {
  res
    .status(401)
    .send({ message: 'Необходима авторизация' });
};

const extractBearerToken = (header) => {
  return header.replace('Bearer ', '');
};

module.exports = (req, res, next) => {
  console.log('author')
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return handleAuthError(res);
  }
  const token = extractBearerToken(authorization);

  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    return handleAuthError(res);
  }

  req.user = payload;
  console.log("payload" ,payload)// записываем пейлоуд в объект запроса
  return next(); // пропускаем запрос дальше
};
// const jwt = require('jsonwebtoken');
// module.exports = (req, res, next) => {
//   const { authorization } = req.headers;
//   if (!authorization && !authorization.startsWith('Bearer ')) {
//     return res
//       .status(401)
//       .send({ message: 'Необходима авторизация' });
//   }
//   const token = authorization.replace('Bearer ', '');
//   let payload;
//   try {
//     payload = jwt.verify(token, 'my-secret-key');
//   } catch (err) {
//     return res
//       .status(401)
//       .send({ message: 'Необходима авторизация' });
//   }
//   req.user = payload;
//   return next();
// };
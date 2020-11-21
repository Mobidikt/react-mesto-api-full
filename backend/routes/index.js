const router = require('express').Router();
// const {
//   createUser,
//   login,
// } = require('../controllers/users.js');
// const bodyParser = require('body-parser');
const cardsRouter = require('./cards.js');
const usersRouter = require('./users.js');
const notFoundRouter = require('./notFound.js');


router.use(usersRouter, cardsRouter, notFoundRouter);
module.exports = router;

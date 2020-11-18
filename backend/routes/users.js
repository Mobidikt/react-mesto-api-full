const router = require('express').Router();
const bodyParser = require('body-parser');

const {
  getUsers,
  getUser,
  getUserById,
  updateUser,
  updateUserAvatar,
} = require('../controllers/users.js');

router.get('/users', getUsers);
router.get('/users/:userId', getUserById);
router.get('/users/me', getUser);
//router.post('/users', bodyParser.json(), createUser);
router.patch('/users/me', bodyParser.json(), updateUser);
router.patch('/users/me/avatar', bodyParser.json(), updateUserAvatar);

module.exports = router;

const router = require('express').Router();
const bodyParser = require('body-parser');
const {
  getUsers,
  getUser,
  getUserById,
  updateUser,
  updateUserAvatar,
} = require('../controllers/users.js');
const auth = require('../middlewares/auth.js');
const {
  validationParams,
  validationUserInfo,
  validationUserAvatar,
} = require('../middlewares/validation');

// router.get('/users', getUsers);
// router.get('/users/:userId', getUserById);
// // router.get('/users/me', auth, getUser);
// //router.post('/users', bodyParser.json(), createUser);
// router.patch('/users/me', bodyParser.json(), updateUser);
// router.patch('/users/me/avatar', bodyParser.json(), updateUserAvatar);

router.get('/users/me', auth, getUser);
router.get('/users', auth, getUsers);
router.get('/users/:userId', validationParams, auth, getUserById);

router.patch(
  '/users/me',
  validationUserInfo,
  auth,
  bodyParser.json(),
  updateUser,
);
router.patch(
  '/users/me/avatar',
  validationUserAvatar,
  auth,
  bodyParser.json(),
  updateUserAvatar,
);

module.exports = router;

const router = require('express').Router();
const bodyParser = require('body-parser');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards.js');
const auth = require('../middlewares/auth');
const {
  validationCard,
  validationParams,
} = require('../middlewares/validation');

// router.get('/cards', getCards);
// router.post('/cards', bodyParser.json(), createCard);
// router.delete('/cards/:cardId', deleteCard);
// router.put('/cards/:cardId/likes', likeCard);
// router.delete('/cards/:cardId/likes', dislikeCard);

router.get('/cards', auth, getCards);
router.post('/cards', validationCard, auth, bodyParser.json(), createCard);
router.delete('/cards/:cardId', validationParams, auth, deleteCard);
router.put('/cards/likes/:cardId', validationParams, auth, likeCard);
router.delete('/cards/likes/:cardId', validationParams, auth, dislikeCard);

module.exports = router;

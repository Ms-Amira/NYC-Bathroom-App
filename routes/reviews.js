const router = require('express').Router();
const reviewCtrl = require('../controllers/reviews');

router.post('/bathrooms/:id/reviews', reviewCtrl.create);
router.delete('/review/:id', reviewCtrl.delete);

module.exports = router;
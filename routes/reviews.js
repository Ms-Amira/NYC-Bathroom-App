const router = require('express').Router();
const reviewCtrl = require('../controllers/reviews');

router.post('/bathrooms/:id/reviews', reviewCtrl.create);
router.put('/reviews/:id', reviewCtrl.update);

module.exports = router;
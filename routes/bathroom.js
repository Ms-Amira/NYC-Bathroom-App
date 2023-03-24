const router = require('express').Router();
const bathroomsCtrl = require('../controllers/bathrooms');

// const isLoggedIn = require('../config/auth');
router.get('/', bathroomsCtrl.index);
router.post('/', bathroomsCtrl.create);
// router.post('/', isLoggedIn, bathroomsCtrl.create);

module.exports = router;
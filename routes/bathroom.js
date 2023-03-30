const router = require('express').Router();
const bathroomsCtrl = require('../controllers/bathrooms');
const isLoggedIn = require('../config/auth');

router.get('/', bathroomsCtrl.index);
router.get('/new', isLoggedIn, bathroomsCtrl.new);
router.get('/:id', bathroomsCtrl.show)
router.post('/', isLoggedIn, bathroomsCtrl.create);
router.delete('/:id', isLoggedIn, bathroomsCtrl.delete);


module.exports = router;
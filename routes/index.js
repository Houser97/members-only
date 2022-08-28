var express = require('express');
var router = express.Router();
let passport = require('passport');

const sign_up_controller = require('../controllers/userController');

/* GET home page. */
router.get('/', sign_up_controller.home_get);

router.post('/', sign_up_controller.user_create_post);

// POST de LOG IN
router.post('/log-in', passport.authenticate('local', {
  successRedirect:'/',
  failureRedirect:'/error'
}));

module.exports = router;

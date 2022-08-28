var express = require('express');
var router = express.Router();
let passport = require('passport');

const user_controller = require('../controllers/userController');

/* GET home page. */
router.get('/', user_controller.home_get);

router.post('/', user_controller.user_create_post);

// POST de LOG IN
router.post('/log-in', passport.authenticate('local', {
  successRedirect:'/',
  failureRedirect:'/error'
}));

// Log out
router.get('/log-out', user_controller.log_out);


module.exports = router;

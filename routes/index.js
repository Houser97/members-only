var express = require('express');
var router = express.Router();
let passport = require('passport');

const user_controller = require('../controllers/userController');

/* GET home page. */
router.get('/', user_controller.home_get);

// POST de SIGN UP
router.post('/', user_controller.user_create_post);

// POST de LOG IN
router.post('/log-in', passport.authenticate('local', {
  successRedirect:'/',
  failureRedirect:'/error'
}));

// Log out
router.get('/log-out', user_controller.log_out);

/* Página de error si el usuario para iniciar sesión no existe */
router.get('/error', user_controller.error_page);


module.exports = router;

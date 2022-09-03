var express = require('express');
var router = express.Router();
let passport = require('passport');

const user_controller = require('../controllers/userController');
const message_controller = require('../controllers/messageController');

/* GET home page. */
router.get('/', user_controller.home_get);

// POST de SIGN UP
router.post('/', user_controller.user_create_post);

// POST de LOG IN
router.post('/log-in', passport.authenticate('local', {
  successRedirect:'/',
  failureRedirect:'/error_not_found'
}));

// Log out
router.get('/log-out', user_controller.log_out);

/* Página de error si el usuario para iniciar sesión no existe */
router.get('/error_not_found', user_controller.error_page);

/* Ruta para procesar actualización del role */
router.post('/secret-code', user_controller.update_user_role);

/* Ruta eliminar mensaje. Ruta se definió en el FORM en MESSAGE-CARD.EJS */
router.post('/delete-message', message_controller.message_delete_post);

module.exports = router;

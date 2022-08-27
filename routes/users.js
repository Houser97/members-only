var express = require('express');
var router = express.Router();

/* Mostrar información del usuario */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Formulario para registrarse */
router.get('/sign-up', function(req, res, next){})

module.exports = router;

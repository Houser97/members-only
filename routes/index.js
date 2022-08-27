var express = require('express');
var router = express.Router();

const sign_up_controller = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Members Only' });
});

router.post('/', sign_up_controller.user_create_post);

module.exports = router;

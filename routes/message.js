const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Abrir sección de formulario de mensaje
router.get('/', messageController.message_form_get);

// Crear nuevo mensaje
router.post('/', messageController.message_form_post);

module.exports = router;
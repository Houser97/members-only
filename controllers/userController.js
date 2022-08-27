let User = require('../models/user');
let async = require('async');
let {body, validationResult} = require('express-validator');

/* Mostrar formulario de registro */
exports.user_create_post = [
    body('username', 'Username must be an email address.').isEmail()
                .trim()
                .escape()
                .normalizeEmail(),
    body('pwd', 'Password must not be empty').isLength({min: 8})
                .withMessage('Password must be at least 8 characters')
                .matches('[0-9]')
                .withMessage('Password must contain at least 1 number')
                .matches('[A-Z]')
                .withMessage('Password must contain at least 1 uppercase letter')
                .trim()
                .escape(),
];

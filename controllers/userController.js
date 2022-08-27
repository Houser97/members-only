let User = require('../models/user');
let async = require('async');
let {body, validationResult} = require('express-validator');

/* Mostrar formulario de registro */
exports.user_create_get = function(req, res, next){
    res.render('sign_up', {
        title: 'Sign up'
    })
}

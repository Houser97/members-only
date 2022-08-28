let User = require('../models/user');
let async = require('async');
let {body, validationResult} = require('express-validator');
let bcryptjs = require('bcryptjs');

// Renderizar página home
exports.home_get = function(req, res){
    res.render('index', {
        title: 'Members Only', 
        userSession: req.user,
        }
    )
}
/* Formulario de registro POST */
exports.user_create_post = [
    body('username', 'Username must be an email address.').isEmail()
                .trim()
                .escape()
                ,
    body('pwd', 'Password must not be empty').isLength({min: 8})
                .withMessage('Password must be at least 8 characters')
                .matches('[0-9]')
                .withMessage('Password must contain at least 1 number')
                .matches('[A-Z]')
                .withMessage('Password must contain at least 1 uppercase letter')
                .trim()
                .escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        // Este USER se usa para imprimir los datos ingresados en el form
        // en caso de que hubiera un error.
        const user = {
            username: req.body.username,
            password: req.body.pwd,
        };

        if(!errors.isEmpty()){
            res.render('index', { 
                title: 'Members Only', 
                user: user,
                errors: errors.array(),
                openForm: true,
            });
            return;  
        } else {
            bcryptjs.hash(req.body.pwd, 10, (err, hashedPwd)=>{
                if(err) return next(err);
                const user = new User({
                    username: req.body.username,
                    password: hashedPwd,
                    role: req.body.role,
                }).save(err => {
                    if(err) return next(err);
                    res.redirect('/');
                })
            })
        }
    }
];

/* Log out*/
exports.log_out = function(req, res, next){
    req.logout(function(err){
        if(err) return next(err);
        res.redirect('/');
    })
}

const Message = require('../models/message');
const {body, validationResult} = require('express-validator');

exports.message_form_get = function(req, res){
    res.render('message-form', {
        title: 'Create new message',
        userSession: req.user,
    });
}

exports.message_form_post = [
    body('title', 'Title must not be empty').isLength({min: 3})
                                            .trim()
                                            .escape(),
    body('message', 'Message must not be empty').isLength({min: 5})
                                                .withMessage('Message must have at least 5 characters')
                                                .trim()
                                                .escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        const message = new Message({
            title: req.body.title,
            text: req.body.message,
            author: req.body.author,
        });

        if(!errors.isEmpty()){
            res.render('message-form', {
                title: 'Create new message',
                userSession: req.user,
                errors: errors.array(),
                message: message,
            });
            return;
        } else {
            message.save(function(err){
                if(err) return next(err);
                res.redirect('/');
            })
        }
    }

]

// Borrar mensaje
exports.message_delete_post = function(req, res, next){
    Message.findByIdAndRemove(req.body.idMessage, function(err){
        if(err) return next(err);
        res.redirect('/')
    })
}
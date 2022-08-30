exports.message_form_get = function(req, res){
    res.render('message-form', {
        title: 'Create new message',
        userSession: req.user,
    });
}
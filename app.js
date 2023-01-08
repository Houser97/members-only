var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');
// PASSPORT
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// BCRYPTJS
const bcryptjs = require('bcryptjs');
//Importar modelo de usuarios para poder autenticar con PASSPORT
const User = require('./models/user');
const favicon = require('serve-favicon');

const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let messageRouter = require('./routes/message');

var app = express();
app.use(cors())

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

//Establecer conexión con MongoDB.
let mongoDB = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.7rahnnq.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Obtener la conexión por defecto.
let db = mongoose.connection;

// Ligar conexión con evento de error (para obtener notificaciones de errores de conexión).
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Funciones de PASSPORT
//Buscar usuario y comprobar que contraseña coincida.
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({username: username}, (err, user) => {
      if(err) return done(err);
      if(!user) return done(null, false, {message: 'Incorrect username'});
      bcryptjs.compare(password, user.password, (err, res) => {
        if(res) return done(null, user);
        else return done(null, false, {message: 'Incorrect password'})
      });
    })
  })
);

//Creación de cookie para mantener al usuario en sesión
passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err, user);
  })
})

//PASSPORT
app.use(session({secret: 'cats', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({extended: false}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/message', messageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

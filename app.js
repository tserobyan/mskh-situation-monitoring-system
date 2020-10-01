var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');

require('./services/db-connection')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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

var email   = require("./path/to/emailjs/email");
var server  = email.server.connect({
    user: "mindfreelt", 
    password: "mindfreemskh", 
    host:       "smtp.gmail.com", 
    ssl:        true
});

// send the message and get a callback with an error or details of the message that was sent
server.send({
    text:  "We have an error", 
    from:  "you <mindfreelt@gmail.com>", 
    to:    "someone <lisatsaturyan@gmail.com>",
    cc:    "else <tatevayvazyan28@gmail.com>",
    subject: "Check your site"
}, 

function(err, message) { console.log(err || message); });

module.exports = app;

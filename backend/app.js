var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const ConnectToDatabase = require('./models');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Express Session
app.use(session({
    secret: 'mySercret',
    resave: false,
    saveUninitialized: true
}))

//Connect to database
ConnectToDatabase()

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

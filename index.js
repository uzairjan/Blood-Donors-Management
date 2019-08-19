const createError  = require('http-errors');
const express      = require('express');
const path         = require('path');
const app          = express();

const expressHbs   = require('express-handlebars');
const session      = require('express-session');
const cookieParser = require('cookie-parser');
const flash        = require('connect-flash');
const passport     = require('passport');
const validator    = require("express-validator");
const bodyParser   = require('body-parser');
const logger       = require('morgan');
const mongoose     = require('mongoose');
const handlbbars   = require('./helpers/datehelper')(expressHbs);



app.engine(".hbs", handlbbars.engine);

mongoose.connect(
  "mongodb://uzairkhan:uzairkhan687@ds349857.mlab.com:49857/blood",
  { useNewUrlParser: true, useFindAndModify: false }
);
// mongoose.connect("mongodb://localhost:27017/shopping", {useNewUrlParser: true, useFindAndModify: false});
var passports = require('./middlewares/passport');

app.set('view engine', '.hbs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname,'public')));

app.use(validator());
app.use(cookieParser());
app.use(
  session({
    secret: "mysupersecret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 180 * 60 * 1000 }
  })
);
app.use(flash());
app.use((req, res, next) =>{
    res.locals.login = req.isAuthenticated(); 
  res.locals.session = req.session;
  next();
});



require('./routes/indexRouter')(app);

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
  res.render('error', {layout: 'client_layout'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running at port 5000");
});



module.exports = app;
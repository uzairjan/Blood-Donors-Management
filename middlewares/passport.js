var passport = require('passport');
var User = require('../models/userModel');
var LocalStrategy = require('passport-local').Strategy;



passport.serializeUser((user, done)=> {
  done(null, user.id);
});

//siging strategy


passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    function(req, email, password, done) {
      console.log("request: ", req.body);
      var form = req.flash("form", req.body);

      req
        .checkBody("email", "invalid email")
        .notEmpty()
        .isEmail();
      req.checkBody("password", "invalid password").notEmpty();
      var errors = req.validationErrors();
      if (errors) {
        var messages = [];
        errors.forEach(error => {
          messages.push(error.msg);
        });
        return done(null, email, {
          error: req.flash("error", messages),
          form: form
        });
      }
      User.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: "No user found!"
          });
        }
        if (!user.validPassword(password)) {
          return done(null, false, {
            message: "Wrong Password"
          });
        }
        return done(null, user);
      });
    }
  )
);
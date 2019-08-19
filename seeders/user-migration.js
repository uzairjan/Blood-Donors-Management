var mongoose = require("mongoose");

var User = require("../models/userModel");
mongoose.connect(
  "mongodb://uzairkhan:uzairkhan687@ds349857.mlab.com:49857/blood",
  { useNewUrlParser: true }
);

var users = [
  new User({
    email: "muhammaduzair687@gmail.com",
    password:"uzairkhan",
  })
];

var done = 0;

for (let i = 0; i < users.length; i++) {
  users[i].save((err, result) => {
    done++;
    if (done === users.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}

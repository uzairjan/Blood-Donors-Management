var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  mobile: { type: String, required: true },
  dob: { type: Date, required: true },
  blood_group: {type:String, required: true},
  last_donation: {type:Date},
  donation_date: {type:Date},
  verified: {type:Number},
  admin: {type: Boolean},
  town: {type:String},
  postcode: {type:String},
  img : { data: Buffer, contentType: String},
});

userSchema.methods.validPassword = function(password){
    return (password === this.password);
}

module.exports = mongoose.model('User', userSchema);
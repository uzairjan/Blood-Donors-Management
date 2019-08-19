var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    request_date: {type: Date, required: true},
    refno: {type:String, required:true},
    name : {type:String, required:true},
    contact:{type:String,required:true},
    age: {type:Number, required:true},
    email:{type:String, required:true},
    gender:{type:String, required:true},
    blood_group:{type:String, required:true},
    hospital_name:{type:String, required:true},
    till_date: {type:Date,required:true},
    address : {type:String, required:true},
    status: { type:String, required:true},
    sms_status:{type:String, required:true},
    email_status:{type:String, required:true}
});

module.exports = mongoose.model('Requests',schema);
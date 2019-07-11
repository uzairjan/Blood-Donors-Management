var mongoose = require('mongoose');

var Request = require('../models/request');
mongoose.connect(
  "mongodb://uzairkhan:uzairkhan687@ds349857.mlab.com:49857/blood",
  { useNewUrlParser: true }
);


var requests = [
  new Request({
    request_date: new Date(),
    refno: "13123",
    name: "uzair khan",
    contact: "03036552018",
    age: "3323",
    email: "muhammaduzair687@gmail.com",
    gender: "male",
    blood_group: "B-",
    hospital_name: "LRH",
    till_date: new Date(),
    address: "Essa khel hameed",
    status: "active",
    sms_status: "sent",
    email_status: "sent"
  })
];

var done = 0;

for (let i = 0; i < requests.length; i++) {
    requests[i].save((err, result) =>{
        done++;
        if(done === requests.length){
            exit();
        }
    });
    
}

function exit(){
    mongoose.disconnect();
}
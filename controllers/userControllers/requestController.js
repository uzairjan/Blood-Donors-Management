var Request = require("../../models/request");
const check = require("express-validator/check").check;
const validationResult = require("express-validator/check").validationResult;
const body = require("express-validator/check").body;

exports.index = (req, res) => {
  Request.find((err, docs) => {
    var requestChunks = [];
    var chunkSize = 3;
    for (let i = 0; i < docs.length; i += chunkSize) {
      requestChunks.push(docs.slice(i, i + chunkSize));
    }
    // res.send({requestChunks});
    res.render("admin/requests", {
      requests: requestChunks,
      messages: req.flash("delete"),
      success: req.flash("success"),
      active: {Request:true}
    });
  });
};

exports.delete = (req, res) => {
 
  Request.findByIdAndDelete(req.params.id, (err, request) => {
    if (!err) {
       req.flash("delete", "Request is deleted successfully");
      res.redirect("/admin/requests");
    } else {
      console.log("Error while Deleting");
    }
  });
};

exports.create = (req, res) => {
  var messages = req.flash("messages");
  // res.send(messages.body);
  res.render("admin/request_create", {
    messages: messages,
    hasErrors: messages.length > 0,
    form: req.flash("form")[0] || null
  });
};

exports.store = async (req, res, next) => {
  try {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
      req.flash("messages", errors.array());
      req.flash("form", req.body);
      console.log(req.flash("body"));

      // return  res.status(422).json({error: errors.array()});
      res.status(422).redirect("create");
    }

    const {
      name,
      email,
      number,
      age,
      hospital_name,
      gender,
      address,
      till_date,
      blood_group
    } = req.body;

    const request = await Request.create({
      request_date: till_date,
      till_date: till_date,
      name: name,
      refno: "121212",
      email: email,
      contact: number,
      age: age,
      blood_group: blood_group,
      hospital_name: hospital_name,
      gender: gender,
      address: address,
      email_status: "1",
      sms_status: "1",
      status: "1"
    }).then(function(request) {
      req.flash("success", "requested inserted successfully");
      res.redirect("/admin/requests");
    });
  } catch (err) {
    return next(err);
  }
};

exports.ValidateReqeust = method => {
  switch (method) {
    case "store": {
      return [
        body("name", "userName doesnt exists").exists(),

        body("email")
          .exists()
          .withMessage("email already exits")
          .isEmail()
          .withMessage("Incorrect Email address"),

        body("number")
          .not()
          .isEmpty()
          .withMessage("Mobile number is required")
          .isInt()
          .withMessage("Number should be integer.")
          .isLength({ min: 11, max: 11 })
          .withMessage("Incorrect mobile number"),
        body("age")
          .not()
          .isEmpty()
          .withMessage("Age is required"),
        body("blood_group")
          .not()
          .isEmpty()
          .withMessage("Please enter your blood group"),
        body("hospital_name")
          .not()
          .isEmpty()
          .withMessage("hospital Name is required"),
        body("address")
          .not()
          .isEmpty()
          .withMessage("Address is must"),
        body("gender")
          .not()
          .isEmpty()
          .withMessage("Gender is required")
      ];
    }
  }
};

exports.edit = (req, res) => {
   var messages = req.flash("messages");
  Request.findOne({
    _id: req.params.id
  }).exec((err, request) => {
    if (err) {
      res.send(err);
    } else {
      res.render("admin/request_update", {
        request: request,
        messages: messages,
        hasErrors: messages.length > 0
      });
    }
  });
};

exports.update = async (req, res, next) => {
  // res.send(req.body);
  const {
    id,
    name,
    email,
    number,
    age,
    hospital_name,
    gender,
    address,
    till_date,
    blood_group
  } = req.body;
  try {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
      req.flash("messages", errors.array());
      //  req.flash("form", req.body);
      console.log(req.flash("body"));

      // return  res.status(422).json({error: errors.array()});
      res.status(422).redirect("edit/"+id);
    }
    Request.findByIdAndUpdate(
      {
        _id: id
      },
      {
        $set: {
          request_date: till_date,
          till_date: till_date,
          name: name,
          refno: "121212",
          email: email,
          contact: number,
          age: age,
          blood_group: blood_group,
          hospital_name: hospital_name,
          gender: gender,
          address: address,
          email_status: "1",
          sms_status: "1",
          status: "1"
        }
      },
      {
        new: true
      },
      function(err, request) {
        if (err) return res.send(err);
        req.flash("success", "Request Updated successfully");
        res.redirect("/admin/requests");
      }
    );
  } catch (error) {
    return next(error);
  }
};

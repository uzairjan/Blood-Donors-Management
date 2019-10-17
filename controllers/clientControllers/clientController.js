const Request = "../../model/request";
const User =    "../../model/userModel";


class Client {
  index(req, res) {
    res.render("client/index", { layout: "client_layout" });
  }

  registerRequest(req, res) {
    try {
      Request.create({});
      res.send(req.body);
    } catch (error) {}
  }

  about(req, res) {
    res.render("client/about", { layout: "client_layout" });
  }

  faqs(req, res) {
    res.render("client/faq", { layout: "client_layout" });
  }

  requests(req, res) {
    res.render("client/requests", { layout: "client_layout" });
  }

  donor(req, res) {
    res.render("client/register_donor", { layout: "client_layout" });
  }

  login(req, res) {
    res.render("client/login", { layout: "client_layout" });
  }

  feedback(req, res) {
    res.render("client/feedback", { layout: "client_layout" });
  }

  registerDonor(req, res){
    var errors = [];
    try {
      const { first_name, last_name, contact_no, email, password, cpassword}  = req.body;
      if(!first_name ){
        errors.push({msg: "Please fill in first name"});
      } if (!last_name) {
        errors.push({msg: "Please fill in last name"});
      }  if(!contact_no){
        errors.push({msg: "Please fill in contact no."});
      } if (!email) {
        errors.push({msg: "please fill in email"});
      } if (!password) {
        errors.push({msg: "please fill in password"});
      }
      if(password !== cpassword){
        errors.push({msg: "Password doesn't match"});
      }
      if (errors.length >= 0) {
        console.log(errors)
        res.render("client/register_donor", 
        {
          layout: "client_layout",
          errors,
          form: req.body
        });
      }

    } catch (error) {
      
    }
    // res.send(req.body);

  }

  CheckIfEmailExist(req, res){
    const uzair =  User.findOne({ email: "muhammaduzair687@gmail.com" });
    if(uzair){
      res.send("find");
    }else{
      res.send('no finde');
    }
    // .then(user => {
    //   if (!user) {
    //     res.send("exist");
    //   } else {
    //     res.send("deos not exist");
    //   }
    // });
  }

   checkemail(req, res){
     console.log(req.body.email);
     var email = req.body.email;
     uzair = this.CheckIfEmailExist(email);
    console.log(typeof(email));
    //  var uzair = true;
     if(uzair== true){
       return res.send('false');
     }else{
       return res.send('true');
     }
  }
}

module.exports = new Client();

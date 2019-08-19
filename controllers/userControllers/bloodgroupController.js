const Blood = require("../../models/bloodgroup"); // blood group model

class BloodGroup {
  constructor() {
    //here you can initialize any global variables
    // this.delete = this.delete.bind(this);
    // this.deleting = 2;
  }
  async index(req, res) {
    Blood.find((err, blood) => {
      res.render("admin/bloodgroup/bloodgroup", {
        bloodgroups: blood,
        messages: req.flash("delete"),
        success: req.flash("success"),
        active: { BloodGroup: true }
      });
    });
  }

  async create(req, res) {
    res.render("admin/bloodgroup/create_bloodgroup");
  }

  async store(req, res, next) {
    const { name } = req.body;
    try {
      const blood = await Blood.create({
        blood_group: name
      });
      if (blood) {
        res.redirect("/admin/bloodgroup");
      }
    } catch (error) {
      return next(error);
    }
  }

  edit(req, res) {
     var messages = req.flash("messages");
    Blood.findOne({
      _id : req.params.id
    }).exec((err, group) => {
      console.log(group);
      if (err) {
        res.send(err);  
      } else {
        res.render("admin/bloodgroup/edit_bloodgroup", {
          
          bloodgroup: group,
          messages: messages,
          hasErrors: messages.length > 0
        });
      }
    });
  }

  delete(req, res) {
    Blood.findOneAndDelete(req.params.id, (err, group) => {
      if (!err) {
        req.flash("delete", "Blood Group is deleted successfully.");
        res.redirect("/admin/bloodgroup");
      } else {
        req.flash("delete", "Blood Group is not deleted.");
        res.redirect("/admin/bloodgroup");
      }
    });
  }

 async update(req, res, next) {
   const {id, name } = req.body;
     try {
       Blood.findByIdAndUpdate(
         {
           _id :id
         },{
           $set : {
             blood_group: name
           }
         },{
           new:true
         }, function(err, group){
          if(err){
            req.flash("success", "Request Not Updated successfully");
            res.redirect("/admin/bloodgroup");
          }else{
            req.flash("success", "Request Updated successfully");
            res.redirect("/admin/bloodgroup");
          }
         }
       );
     } catch (error) {
       return next(error);
     }
    }
} //end of class

module.exports = new BloodGroup();
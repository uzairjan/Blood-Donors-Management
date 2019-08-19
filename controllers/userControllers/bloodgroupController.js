const Blood = require('../../models/bloodgroup');


exports.index = (req, res) => {
  Blood.find((err, blood) => {
    res.render("admin/bloodgroup/bloodgroup", {
      bloodgroups: blood,
      messages: req.flash("delete"),
      success: req.flash("success"),
      active: { BloodGroup: true }
    });
  });
};

exports.create = (req, res) => {
  res.render('admin/bloodgroup/create_bloodgroup');
};

exports.edit = (req, res) => {
  res.send("editing");
};

exports.delete = (req, res) => {
  res.send("deleting");
};

exports.store = async (req, res, next) => {
  const { name } = req.body;
  try {
    const blood = await Blood.create({
      blood_group: name
    });
    if(blood){
      res.redirect('/admin/bloodgroup');
    }
  } catch (error) {
    return next(error)
  }
};

exports.update = (req, res) => {
  res.send("updating");
};

exports.DonorReport = (req, res) => {
  res.send("Reporting from donor controller");
};
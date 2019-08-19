const City = require("../../models/city");

class CityClass {
  index(req, res) {
    City.find((err, city) => {
      res.render("admin/city/city", {
        cities: city,
        messages: req.flash("delete"),
        success: req.flash("success"),
        active: { Request: true }
      });
    });
  }

  async store(req, res) {
    try {
      const city = await City.create({
        c_name: req.body.name,
        postcode: req.body.postcode,
        district: req.body.district,
        state: req.body.state
      }).then(city => {
        req.flash("success", "City Created successfully");
        res.redirect("/admin/city");
      });
    } catch (err) {
      return next(err);
    }
  }

  delete(req, res) {
    // res.send("hello world");
    req.flash("delete", "City Deleted Successfully");
    City.findByIdAndDelete(req.params.id, (err, city) => {
      if (!err) {
        res.redirect("/admin/city");
      } else {
        console.log("could not deleted");
      }
    });
  }

  edit(req, res) {
    City.findOne({ _id: req.params.id }).exec((err, city) => {
      if (err) {
        req.flash("delete", "could edit this record");
        res.redirect("/admin/city");
      } else {
        res.render("admin/city/edit_city", {
          form: city
        });
      }
    });
  }

  update(req, res) {
    try {
      City.findByIdAndUpdate(
        {
          _id: req.body.id
        },
        {
          $set: {
            c_name: req.body.name,
            postcode: req.body.postcode,
            district: req.body.district,
            state: req.body.state
          }
        },
        {
          new: true
        },
        (err, city) => {
          if (err) {
            res.send("and error occur while updating");
          } else {
            req.flash("success", "City Updated successfully");
            res.redirect("/admin/city");
          }
        }
      );
    } catch (error) {
      return next(error);
    }
  }
}


module.exports = new CityClass();
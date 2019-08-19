exports.index = function(req, res) {
        var messages = req.flash("error");
        var form = req.flash("form");
        console.log("form data: ",messages);
    res.render("admin/index", {
      layout: "loginSignup",
      messages: messages,
      hasErrors: messages.length > 0,
      form: form,
      active: {Dashboard:true}
    });
};

exports.adminpanel = (req, res) => {
  res.render("admin/dashboard", {active: {Dashboard:true}});
}
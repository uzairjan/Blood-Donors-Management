var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render('client/index', {layout: 'client_layout'});
});

// router.get("/dashboard", (req, res) => {
//   res.render("admin/dashboard");
// });

module.exports = router;

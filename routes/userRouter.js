var express = require('express');
var router = express.Router();

var dashboard = require('../controllers/userControllers/dashboard');
var requestsController = require('../controllers/userControllers/requestController');

router.get("/", dashboard.index);

router.get("/dashboard", (req, res) => {
  res.render("admin/dashboard");
});
router.get("/requests", requestsController.index);

router.get("/widgets", (req, res) => {
  res.render("admin/dashboard");
});

router.get("/grid", (req, res) => {
  res.render("admin/dashboard");
});

router.get("/tables", (req, res) => {
  res.render("admin/dashboard");
});

router.get("/buttons", (req, res) => {
  res.render("admin/dashboard");
});

router.get("/interface", (req, res) => {
  res.render("admin/dashboard");
});


module.exports = router;
var express = require("express");
var router = express.Router();
const clientController = require('../controllers/clientControllers/clientController');

router.get("/", clientController.index);
router.post("/register", clientController.registerRequest);
router.post("/donor",clientController.registerDonor);
router.post("/checkemail", clientController.checkemail);
router.get("/checkemailifexist", clientController.CheckIfEmailExist);
router.post("/registerdonor", clientController.registerDonor);


router.get("/about",clientController.about);
router.get("/faqs",clientController.faqs);
router.get("/requests",clientController.requests);
router.get("/donor", clientController.donor);
router.get("/login", clientController.login);
router.get("/feedback",clientController.feedback);



module.exports = router;

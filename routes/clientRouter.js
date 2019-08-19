var express = require("express");
var router = express.Router();
const clientController = require('../controllers/clientControllers/clientController');

router.get("/", clientController.index);
router.post("/register",clientController.registerRequest);


router.get("/about",clientController.about);
router.get("/faqs",clientController.faqs);
router.get("/requests",clientController.requests);
router.get("/donor", clientController.donor);
router.get("/login", clientController.login);
router.get("/feedback",clientController.feedback);



module.exports = router;

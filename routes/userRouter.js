var express = require('express');
var router = express.Router();
const app = express();
var passport = require("passport");

const check = require("express-validator/check").check;
const validationResult = require("express-validator/check").validationResult; 
/****
*
*  controllers
*
*****/
const dashboard = require('../controllers/userControllers/dashboard');
const requestsController = require('../controllers/userControllers/requestController');
const cityController = require("../controllers/userControllers/cityController");
const donorController = require("../controllers/userControllers/donorController");
const bloodgroupController = require("../controllers/userControllers/bloodgroupController");
const provinceController = require('../controllers/userControllers/provinceController');




      router.get("/", dashboard.index);
      router.get("/dashboard", dashboard.adminpanel);

/****
*
* // Request controller routes
*
*****/
      router.get("/requests", requestsController.index);
      router.get("/requests/delete/:id", requestsController.delete);
      router.get("/requests/edit/:id", requestsController.edit);
      router.get("/requests/create", requestsController.create);
      //middle ware for validation
      app.use("/requests/update", requestsController.ValidateReqeust);
      router.post( "/requests/update", requestsController.ValidateReqeust("store"), requestsController.update);
      app.use("/requests/store", requestsController.ValidateReqeust);
      router.post("/requests/store",requestsController.ValidateReqeust("store"),requestsController.store);



/****
*
* // login and passport related stuff
*
*****/

      router.post("/login",passport.authenticate("local.signin", {
          successRedirect: "/admin/dashboard",
          failureRedirect: "/admin",
          failureFlash: true
        })
      );


/****
*
* // Donor routes
*
*****/


      router.get("/donor", donorController.index);
      router.get('/donor/create', donorController.create);
      router.get('/donor/edit/:id', donorController.edit);
      router.get('/donor/delete/:id', donorController.delete);
      router.post('/donor/store', donorController.store);
      router.post('/donor/update', donorController.update);
      router.get("/donors_report/", donorController.delete);

              
/****
*
* // Blood group routes
*
*****/

      router.get("/bloodgroup", bloodgroupController.index);
      router.get("/bloodgroup/create", bloodgroupController.create);
      router.get("/bloodgroup/edit/:id", bloodgroupController.edit);
      router.get("/bloodgroup/delete/:id", bloodgroupController.delete);
      router.post("/bloodgroup/store", bloodgroupController.store);
      router.post("/bloodgroup/update", bloodgroupController.update);





      router.get("/grid", (req, res) => {
        res.render("admin/dashboard");
      });

      router.get("/tables", (req, res) => {
        res.render("admin/dashboard");
      });

      router.get("/buttons", (req, res) => {
        res.render("admin/dashboard");
      });

/****
*
*  city routes
*
*****/


      router.get("/city",cityController.index);
      router.post("/city/store", cityController.store);

      router.get("/city/create", (req, res) => {
        res.render("admin/city/create_city");
      });

      router.get("/city/edit/:id",cityController.edit);

      router.post("/city/update",cityController.update);

      router.get("/city/delete/:id", cityController.delete);

/****
*
*  province routes
*
*****/



      router.get("/province", provinceController.index);
      router.get("/province/create", provinceController.create);
      router.get("/province/edit/:id", provinceController.edit);
      router.get("/province/delete/:id", provinceController.delete);
      router.post("/province/store", provinceController.store);
      router.post("/province/update", provinceController.update);



/****
*
*  donors routes
*
*****/


module.exports = router;

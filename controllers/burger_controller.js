var express = require("express");
var router = express.Router();
// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.


router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/", function(req, res) {
  burgers.create([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var devoured = "id = " + req.params.id;
  console.log("devoured", devoured);
  burgers.update({
    devoured: req.body.devoured
  }, devoured, function() {
    res.redirect("/");
  });
});


module.exports = router;

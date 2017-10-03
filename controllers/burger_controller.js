var express = require("express");
var router = express.Router();
// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.


router.get("/index", function(req, res) {
  console.log("index")
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
    "name", "consumed"
  ], [
    req.body.name, req.body.consumed
  ], function() {
    res.redirect("/");
  });
});
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burgers.update({
    consumed: req.body.consumed
  }, consumed, function() {
    res.redirect("/");
  });
});


module.exports = router;

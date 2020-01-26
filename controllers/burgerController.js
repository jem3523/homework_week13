var express = require("express");
var router = express.Router();
var burgerModel = require("../models/burgerModule.js");

router.get("/", function(req, res) 
{
  burgerModel.all(function(data) 
  {
    var hbsObject = {burgers: data};
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) 
{
  burgerModel.create(req.body.name,function(result) 
    {
      res.json({ id: result.insertId })
    }
  );
});

router.put("/:id", function(req, res) 
{
  var condition = req.params.id;
  console.log("condition", condition);
  burgerModel.update(condition, function(result) 
  {
    if (result.changedRows == 0) 
    {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else 
    {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

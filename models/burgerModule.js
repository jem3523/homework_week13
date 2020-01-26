// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgerModel = 
{
  all: function(cb) 
  {
    orm.selectAll("burgers", function(res) 
    {cb(res)});
  },

  create: function(vals, cb) 
  {
    orm.insertOne("burgers", "burger_name", vals, function(res) 
    {cb(res)});
  },

  update: function(condition, cb) 
  {
    orm.updateOne("burgers", "devoured", condition, function(res) 
    {cb(res)});
  }

};

// Export the database functions for the controller
module.exports = burgerModel;

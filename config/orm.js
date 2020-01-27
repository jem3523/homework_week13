// Import MySQL connection from connection
var connection = require("../config/connection.js");

var orm = 
{
  //gets all entries
  selectAll: function(tableName, cb) 
  {
    var queryString = "SELECT * FROM ??; ";
    connection.query(queryString, [tableName], function(err, result) 
    {
      if (err) {throw err};
      cb(result);
    });
  },

  //adds an entry
  insertOne: function(tablename, colName, vals, cb) 
  {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [tablename, colName, vals], function(err, result) 
    {
      if (err) {throw err};
      cb(result);
    });
  },

  //updates an entry
  updateOne: function(table, colName, condition, cb) 
  {
    var queryString = "UPDATE ?? SET ?? = true WHERE id = ?";
    console.log(queryString);
    connection.query(queryString, [table, colName, condition], function(err, result) 
    {
      if (err) {throw err};
      cb(result);
    });
  }

};

module.exports = orm;

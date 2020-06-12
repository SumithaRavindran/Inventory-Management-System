/**
 * database.js: This file has the connection details and used to connect to the database.
 * @author: Adam Shandi, Deepthi Warrier, Sumitha Ravindran
 * @date: 22/May/2020 *
 */

var mysql = require('mysql');

// The connection details
var conn = mysql.createConnection({
  host: '', 
  user: '',      
  password: '',     
  database: 'awsrds' 
}); 

//Connecting to the awsrds database
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = conn;

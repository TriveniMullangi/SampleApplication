var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'miracle1',
  password : 'miracle1@',
  database : 'student_db'
}); 
connection.connect(function(err) {
    if (err) {
    console.error('error connecting: ' + err.stack);
    return;
}
else{
    console.log("database has been connected");
}
});
var queryString = 'alter table student add column sgrade char(2)'; 
connection.query(queryString, function(err) {
    if (err) throw err; 
    else{
       console.log("column added");
    }
}); 
connection.end();
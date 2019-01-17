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
var queryString = 'SELECT * FROM student '; //limit 2
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err; 
    for (var i in rows) {
        console.log('studentName: ', rows[i].sname," , studentId",rows[i].sid);
    }
}); 
connection.end();
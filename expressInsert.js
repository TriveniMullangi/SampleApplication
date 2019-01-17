var express = require('express');
var mysql = require('mysql');
var app = express();
var data=[];
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'miracle1',
  password : 'miracle1@',
  database:'student_db'
});
app.set('port', 3000);
app.get('/', function(req, res){
  connection.query('insert into student(sname,marks1,marks2,marks3) values("navya",80,80,80) ', function(err, rows){
	if(err) {
        console.log("data not insertd");
        return
    }
   res.send("data inserted");
  });
 
});

app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));

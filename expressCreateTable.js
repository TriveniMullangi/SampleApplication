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
var queryString=`CREATE TABLE emp1(  
                       eid int NOT NULL AUTO_INCREMENT,  
                         ename VARCHAR(100) NOT NULL,  
                        PRIMARY KEY ( eid ))`;

app.get('/', function(req, res){
  connection.query(queryString, function(err, rows){
	if(err) {
        console.log("table not created");
        return
    }
   res.send("table created");
  });
 
});

app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));

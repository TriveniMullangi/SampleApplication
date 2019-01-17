var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser=require("body-parser");
app.use(bodyParser.json());
//var data=[];
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'miracle1',
  password : 'miracle1@',
  database:'student_db'
});
app.set('port', 8080);
app.get('/', function(req, res){
  connection.query('SELECT * FROM student', function(err, rows){
	// for (var i in rows) {
	//    data.push(rows[i].sname);
	// 		}
  //  res.send(data);
  if(err) throw err;
  res.send(rows);
  });
 
});
app.get('/getUser/:id',function(req,res){
  connection.query('select * from student where sid=?',[req.params.id],function(err,data){
    if(err) throw err;
    else{
    const data1=data.find(id1=>id1.sid === parseInt(req.params.id));
    if(!data1) return res.status(404).send("no user available with that id"); 
	 // res.send(data);
    res.send(data1);
    }
  });
});
app.post('/addUser',function(req,res){
  //res.send(req.body.sname);
  connection.query('insert into student(sname,marks1,marks2,marks3,sgrade) values(?,?,?,?,?)',[req.body.sname,req.body.marks1,req.body.marks2,req.body.marks3,req.body.sgrade],function(err,data){
    if(err) throw err;
    res.send("data inserted");
  });
});
app.put("/updateUser/:id",function(req,res){
 connection.query('update student set sname=? where sid=?',[req.body.sname,req.params.id],function(err,data)
 {
  if(err) throw err;
  res.send("data updated");
 });
});
app.delete("/deleteUser/:id",function(req,res)
{
 connection.query("delete from student where sid=?",[req.params.id],function(err,data){
  if(err) throw err;
  res.send("data deleted");
 });
});
app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));

var mysql= require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"data"
});
con.connect(function(err){
    con.query("UPDATE full SET ID=8, AGE=29  WHERE  id= 15",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});
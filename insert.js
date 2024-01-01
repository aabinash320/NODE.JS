var mysql= require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"data"
});
con.connect(function(err){
   
    con.query("INSERT INTO full (NAME,AGE,CITY)VALUES('AKASH',26,'THOPPAIYANKULAM')",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });

});
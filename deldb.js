var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"data"
});
con.connect(function(err,data){
    if(err)throw err;
    con.query("DELETE FROM full WHERE  ID=16 ",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});
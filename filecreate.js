var fs=require('fs');
fs.appendFile( 'good.txt','India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023; and from the time of its independence in 1947, the world s most populous democracy',function(err){

if(err)throw err
console.log("Saved");


})
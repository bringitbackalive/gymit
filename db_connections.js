var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'gymit.cbf3v71m0eer.us-east-1.rds.amazonaws.com' ,
    port: '3306' ,
    user: 'admin' ,
    password:'password' ,
    database: 'gymit'
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected To DB");
});
module.exports = connection;
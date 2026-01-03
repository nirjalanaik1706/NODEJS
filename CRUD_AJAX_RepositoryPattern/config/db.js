var mysql = require('mysql2');

var dbserver = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "customers"
};

var connection = mysql.createConnection(dbserver);

connection.connect(function (err) {
    if (err) {
        console.log("connection unsuccessful..." + err);
    } else {
        console.log("Connection Successful...");
    }
});

module.exports = connection;

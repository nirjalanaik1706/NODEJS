var mysql = require('mysql2');

const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "customers",
    multipleStatements: true
});

db.connect(function (err) {
    if (err) {
        console.log("connection unsuccessful..." + err);
    } else {
        console.log("Connection Successful...");
    }
});

module.exports = db;

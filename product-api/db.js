const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "flowerdb"
});

connection.connect((err) => {
    if (err) {
        console.log("DB Error:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

module.exports = connection;
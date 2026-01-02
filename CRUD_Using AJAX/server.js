var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql2');
const { request } = require('http');

app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(7777, () => {
    console.log("server listening on port no.7777");
});

var dbserver = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "customers"
}

var connection = mysql.createConnection(dbserver);
connection.connect(function (err) {
    if (err) {
        console.log("connection unsuccessful..." + err)
    }
    else {
        console.log("Connection Successful...")
    }
});

app.get((request, response) => {
    response.sendFile("index.html");
});

//Create

app.post('/users', (request, response) => {
    const { name, contact } = request.body;
    const sql = "INSERT INTO users(name,contact) VALUES(?,?)";
    connection.query(sql, [name, contact], (err, result) => {
        if (err) return response.status(500).json({ err, result });
        response.json({ message: "User added successfully", id: result.insertId });
        console.log("Data Inserted in Database...!");
    });
});

//delete
app.delete('/delete', (request, response) => {
    const id = request.params.id;
    const sql = "DELETE FROM users WHERE Id=?";
    connection.query(sql, [id], (err, result) => {
        if (err) return response.status(500).json({ error: err });
        response.json({ message: "Record Deleted successfully...!" });
        if (result.affectedRows === 0) {
            return response.status(404).json({ message: "No record found" })
        };
        console.log("Data deleted successfullt...!");
    });
});

//READ
app.get('/getAllUsers', (request, response) => {
    const sql = "SELECT * FROM users";
    connection.query(sql, (error, result) => {
        if (err) return response.status(500).json({ error: err });
        response.json(result);
        console.log("Record Displayed...!");
    });
});

//UPDATE
app.put('/updateRecord/:id', (request, response) => {
    const is = request.params.id;
    const { name, contact } = request.body;
    const sql = "UPDATE users SET name=?,contact=? WHERE id=?";

    connection.query(sql, [name, contact, id], (err, result) => {
        if (err) return response.status(500).json({ error: err });
        if (result.affectedRows === 0) {
            return response.status(404).json({ message: "User not found" });
        };
        response.json({ message: "Record Updated Successfully...!" })
        console.log("Record Updated...!");
    });
});
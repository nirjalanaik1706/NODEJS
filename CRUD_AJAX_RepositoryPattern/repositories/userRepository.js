const connection = require('../config/db');

exports.insertUser = (name, contact, callback) => {
    const sql = "INSERT INTO users(name,contact) VALUES(?,?)";
    connection.query(sql, [name, contact], callback);
};

exports.deleteUser = (id, callback) => {
    const sql = "DELETE FROM users WHERE id=?";
    connection.query(sql, [id], callback);
};

exports.getUsers = (callback) => {
    const sql = "SELECT * FROM users";
    connection.query(sql, callback);
};

exports.updateUser = (id, name, contact, callback) => {
    const sql = "UPDATE users SET name=?, contact=? WHERE id=?";
    connection.query(sql, [name, contact, id], callback);
};

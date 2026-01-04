const connection = require('../config/db');

exports.insertUser = (name, contact, result) => {
    connection.query(
        'CALL addUser(?, ?)',
        [name, contact], result
    )
};


exports.deleteUser = (id, result) => {
    connection.query('CALL deleteUser(?)',
        [id], result
    )
};

exports.getUsers = (result) => {
    connection.query('CALL getUsers()', (err, res) => {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res[0]);
        }
    })
};

exports.updateUser = (id, name, contact, result) => {
    connection.query('CALL updateUser(?,?,?)',
        [id, name, contact],
        (err, res) => {
            if (err) {
                result(err, null);
            }
            else {
                result(null, res);
            }
        }
    );
};

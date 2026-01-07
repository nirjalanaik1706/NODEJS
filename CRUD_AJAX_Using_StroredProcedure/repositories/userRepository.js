module.exports = function userRepository(db) {

    return {
        insertUser: (name, contact, result) => {
            db.query(
                'CALL addUser(?, ?)',
                [name, contact], result
            )
        },
        deleteUser: (id, result) => {
            db.query('CALL deleteUser(?)',
                [id], result
            )
        },
        getUsers: (result) => {
            db.query('CALL getUsers()', (err, res) => {
                if (err) {
                    result(err, null);
                }
                else {
                    result(null, res[0]);
                }
            })
        },

        updateUser: (id, name, contact, result) => {
            db.query('CALL updateUser(?,?,?)',
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
        },
        getSpecificUser: (id, result) => {
            db.query('CALL getSpecificUser(?)',
                [id], (err, res) => {
                    if (err) {
                        result(err, null);
                    }
                    else {
                        result(null, res[0]);
                    }
                })
        },

        getUserName: (id, result) => {
            db.query(
                'CALL getUserName(?, @userName,@userContact); SELECT @userName AS userName, @userContact AS userContact;', [id],
                (err, results) => {
                    if (err) return result(err);
                    result(null, results[1][0]);
                }
            );
        },

        UpdateUserDetails: (id, newName, newContact, result) => {
            const sql = `CALL UpdateUserDetails(?,?,? ,@oldName,@oldContact,@newName,@newContact);
             SELECT @oldName AS oldName,
             @oldContact AS oldContact,
             @newName AS newName,
             @newContact AS newContact;`;
            db.query(sql, [id, newName, newContact], (err, results) => {
                if (err) return result(err);
                result(null, results[1][0]);
            });
        }
    }
}


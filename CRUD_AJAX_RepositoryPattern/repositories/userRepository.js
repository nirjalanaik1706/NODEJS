module.exports = function userRepository(db) {

    return {

        insertUser(name, contact, result) {
            const sql = "INSERT INTO users(name,contact) VALUES(?,?)";
            db.query(sql, [name, contact], result);
        },


        deleteUser(id, result) {
            const sql = "DELETE FROM users WHERE id=?";
            db.query(sql, [id], result);
        },

        getUsers(result) {
            const sql = "SELECT * FROM users";
            db.query(sql, result);
        },

        updateUser(id, name, contact, result) {
            const sql = "UPDATE users SET name=?, contact=? WHERE id=?";
            db.query(sql, [name, contact, id], result);
        }
    };
};
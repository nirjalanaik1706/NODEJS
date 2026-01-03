const userRepo = require('../repositories/userRepository');

exports.addUser = (name, contact, cb) => {
    userRepo.insertUser(name, contact, cb);
};

exports.removeUser = (id, cb) => {
    userRepo.deleteUser(id, cb);
};

exports.getAllUsers = (cb) => {
    userRepo.getUsers(cb);
};

exports.editUser = (id, name, contact, cb) => {
    userRepo.updateUser(id, name, contact, cb);
};

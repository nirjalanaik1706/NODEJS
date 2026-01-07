module.exports = function userService(userRepository) {
    return {

        addUser: (name, contact, result) => {
            userRepository.insertUser(name, contact, result);
        },

        removeUser: (id, result) => {
            userRepository.deleteUser(id, result);
        },

        getAllUsers: (result) => {
            userRepository.getUsers(result);
        },

        editUser: (id, name, contact, result) => {
            userRepository.updateUser(id, name, contact, result);
        },

        getparticularUser: (id, result) => {
            userRepository.getSpecificUser(id, result);
        },

        getUserNameSP: (id, result) => {
            userRepository.getUserName(id, result);
        },

        UpdateUserDetailsSimpleSP:(id,newName,newContact,result)=>{
            userRepository.UpdateUserDetails(id,newName,newContact,result);
        }
    }
}
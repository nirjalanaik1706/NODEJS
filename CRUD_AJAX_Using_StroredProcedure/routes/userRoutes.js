const express = require('express');
const router = express.Router();

// infrastructure
const db = require('../db/connection');

// repository
const userRepository = require('../repositories/userRepository')(db);

// service
const userService = require('../services/userService')(userRepository);

// controller
const userController = require('../controllers/userController')(userService);



router.post('/users', userController.addUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/getAllUsers', userController.getUsers);
router.put('/updateRecord/:id', userController.updateUser);
router.get('/getSpecificUser/:id',userController.getSpecificUser);
router.get('/getUserNameSP/:id',userController.getUserNameSP);
router.put('/UpdateUserDetails/:id',userController.UpdateUserDetailsSimple);



module.exports = router;

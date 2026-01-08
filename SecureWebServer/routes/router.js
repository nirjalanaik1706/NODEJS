const express=require('express');
const authenticateToken=require('../middleware/authenticate');
const authController=require('../controller/authController');
const orderController=require('../controller/orderController');

const router=express.Router();

router.post('/login',authController.login);

router.get('/orders',authenticateToken,orderController.getOrders);
module.exports=router;
const express=require('express');
const router=require('./routes/router');
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api',router);

app.listen(9999,()=>{
    console.log("Server Listening on port no. 9999....");
});
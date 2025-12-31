var express=require('express');
var path=require('path');
var app=express();

app.use(express.static(path.join(__dirname,'public')));

app.listen(8888,()=>{
    console.log("server is listening on port no. 8888");
});

app.get((request,response)=>{
    response.sendFile("/index.html");
});

app.get("/family",(request,response)=>{
    response.sendFile(path.join(__dirname,"/public/family.json"));
});

var express=require('express');
var path=require('path');
var app=express();

var staticMiddleware=express.static(path.join(__dirname,'public'));
app.use(staticMiddleware);

app.get((request,response)=>{
    response.sendFile("/index.html");
});

app.get("/flower",(request,response)=>{
    var flower={
        "id":34,
        "title":"Gerbera",
        "unit price":5
    };
    response.send(flower);
});

app.get("/flowers",(request,response)=>{
    var flowers=[
        { "id":34,"title":"Gerbera","unit price":5 },
        { "id":35,"title":"rose","unit price":3 },
        { "id":36,"title":"lily","unit price":2 },
        { "id":37,"title":"lotus","unit price":7 },
        { "id":38,"title":"Gerbera","unit price":6 }
    ]
    response.send(flowers);
});

app.get("/family",(request,response)=>{
    response.sendFile(path.join(__dirname,"/public/family.json"));
});

app.listen(8888,()=>{
    console.log("server is listening on port no. 8888");
});

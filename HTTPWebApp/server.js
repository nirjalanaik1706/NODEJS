//HTTP Web Server

var http=require('http');
var person={
    'Firstname':'Nirjala',
    'Lastname':'Naik',
    'Email':'nirjalanaik17062gmail.com',
    'ContactNumber':'7972520102'
};
var people=[
    {'Firstname':'Nirjala','Lastname':'Naik','Email':'nirjalanaik17062gmail.com','ContactNumber':'7972520102'},
    {'Firstname':'sahil','Lastname':'kamble','Email':'nirjalanaik17062gmail.com','ContactNumber':'7972520102'},
    {'Firstname':'Niru','Lastname':'Naik','Email':'nirjalanaik17062gmail.com','ContactNumber':'7972520102'},
    {'Firstname':'Anuja','Lastname':'Naik','Email':'nirjalanaik17062gmail.com','ContactNumber':'7972520102'},
    {'Firstname':'anu','Lastname':'Naik','Email':'nirjalanaik17062gmail.com','ContactNumber':'7972520102'}
    
]

var data="Transflower Learning Pvt.Ltd"
    var onRequestHandler=function(request,response){
    console.log("Request Is Received....")
    response.writeHead(200,{'Content-Type':'text/json'});

    //serilization--deserilization
    response.write(JSON.stringify(people));
    response.end();
};
var server=http.createServer(onRequestHandler);
server.listen(9999);
console.log("server is listening on port no. 9999");
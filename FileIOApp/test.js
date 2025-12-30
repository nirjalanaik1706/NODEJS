
var fs=require('fs');
var fileName="./data/result.txt";


var onFileRead=function(err,data){

    if(err){
        console.log("something has gone wrong");
    }

    console.log("Data from file available");
    console.log(data);
};
fs.readFile(fileName,onFileRead);
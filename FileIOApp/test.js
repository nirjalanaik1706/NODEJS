
var fs=require('fs');
var fileName="./data/result.txt";// data files 

//callback function

var onFileRead=function(err,data){

    if(err){
        throw err;
    }
else{
    console.log("Data from file available");
    console.log(data);
}
}
fs.readFile(fileName,onFileRead); //non-blocking call
console.log("terminating Node js application");

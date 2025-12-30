
var fs=require('fs');
var fileName="./data/result.txt";

//callback function
var onFileRead=function(err,data){

    if(err){
        throw err;
    }

    console.log("Data from file available");
    console.log(data);
};
fs.readFile(fileName,onFileRead); //non-blocking call
console.log("terminating Node js application");
var fs=require('fs');
var fileName='./data/result.txt';
var dataToBeWritten="This data is written by node js application..";

var onFileWrite=function(err){
        if(err){
            throw err;
        }
        console.log("Content has been successfully written into files..");
};
fs.writeFile(fileName,dataToBeWritten,onFileWrite);
console.log("Node application is terminated...");

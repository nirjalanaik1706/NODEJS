//is indirect call
//callback function
// event handler
//Listener
//callback function 1

//nonblocking function
function processJob1(){
    console.log("Processing request by handler 1");
    console.log("Performing task");
    console.log("Generating response");
    console.log("Sending response");
};

//callback function 2

//nonblocking function
function processJob2(){
    console.log("Processing request by handler 2");
    console.log("Performing task 2");
    console.log("Generating response 2");
    console.log("Sending response 2");
};

//callback function 3

//nonblocking function
function processJob3(){
    console.log("Processing request by handler 3");
    console.log("Performing task 3");
    console.log("Generating response 3");
    console.log("Sending response 3");
};
//instead of invoking a function
//is a indirect call
//requestProcess();

// use a inbuild function
//register callback function as first parameter
//set time interval for automatic function call

//set interval is a direct call
//but a processRequest is indirect call

//function mapping after certain interval

//scheduling tasks to be executed repeadly after certain time
//interval

//set background work execution after certain time  interval
// is thisa kind of multitasking
setInterval(processJob1,5000);
setInterval(processJob2,1000);
setInterval(processJob3,10000);


//multitasking is happing in a asyanchronous way
console.log("stop the execution....");
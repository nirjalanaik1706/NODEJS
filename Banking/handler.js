
//Modularity Event handling module
//event handler
//expose functions to be used outside of Javascript file
//exposes functions to be used outside
exports.payIncomeTax=function(){
    console.log("25% income tax to be applied againest account");
};

exports.payService=function(){
    console.log("18% income tax to be applied againest account");
};

exports.blockAccount=function(){
    console.log("The acoount is blocked temp.")
};


exports.sendEmail=function(){
    console.log("email is sent to registered email ID");
};

exports.sendSMS=function(){
    console.log("SMS is sent to registered mobile phone number");
}
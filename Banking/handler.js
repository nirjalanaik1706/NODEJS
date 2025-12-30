
//Modularity Event handling module
//event handler
//expose functions to be used outside of Javascript file
exports.payIncomeTax=function(){
    console.log("25% income tax to be applied againest account");
}

exports.payService=function(){
    console.log("18% income tax to be applied againest account");
}

exports.bloackAccount=function(){
    console.log("The acoount is blocked temp.");
}
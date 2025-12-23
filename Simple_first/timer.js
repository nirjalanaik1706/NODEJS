//set of functions 
//is a javascript loibrary consist of resuable functions
//nodejs is used for writting server side
function show(){
    var count =67;
    count++;
    console.log(count);
    };

function display(company){
    console.log("Company name= "+company);
    };

function addition(num1,num2){
    var result=num1+num2;
    return result;
    };

    show(); //invoking a javascript function
    var provider="Transfloer Learning Pvt. Ltd.";
    var hostName="Seed Infotech Ltd.";
    display(provider);

    var number1=898;
    var number2=764;
    //var total=addition(1,2);
    var total=addition(number1,number2);

    console.log("Final Output: "+total);
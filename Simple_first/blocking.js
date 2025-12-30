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

    //nested function 
    //when a show() function will not complete and  will not execute then the display function will also not execute 
    //that situation called block function( they block each other)
    function main(){
    show(); //invoking a javascript function
    var provider="Transfloer Learning Pvt. Ltd.";
    var hostCompany="Seed Infotech Ltd.";
    display(hostCompany);

    var number1=898;
    var number2=764;
    //var total=addition(1,2);
    var total=addition(number1,number2);

    console.log("Final Output: "+total);
    }
    main();
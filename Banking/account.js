//classical javascript syntax
//SOC:seperation of concers
//loosely coupled, highly cohensive

var handlers = require("./handler"); //custom module
var events=require("events"); //built in modeule available in node js

var emitter=new events.EventEmitter();

var Account = function (amount) {
    var balance = amount;

    //inner function
    var getBalance = function () {
        return balance;
    };

    var monitor = function () {
        if (balance < 5000) {
            //handlers.bloackAccount();
            //emit(trigger) event underBalance
            emitter.emit("underBalance");
        }
        else if (balance >= 25000) {
            //handlers.payIncomeTax();
            //emit (trigger) event overbalance
        emitter.emit("overBalance");        }
    };

    var withdraw = function (amount) {
        balance = balance - amount;
        monitor();
    };

    var deposite = function (amount) {
        balance = balance + amount;
        monitor();
    }

    //publish inner function to outside world
    return {
        receiveBalance: getBalance,
        debit: withdraw,
        credit: deposite
    }
}
//code looks object oriented


//events are associated with instances(objects)
//step 1: Configuration/initialization
//Register Eventhandlers with event using emitter object

emitter.on("underBalance",handlers.bloackAccount);
emitter.on("overBalance",handlers.payIncomeTax);

//step 2: create  objects
var acct123 = new Account(55000);              //creating a instance
var data = acct123.receiveBalance();           //invoking member function
console.log("balance=" + data);
var amount = 200000;
acct123.credit(amount);
data = acct123.receiveBalance();
console.log("Balance=" + data);
import employee from "./employee.js";
import salesEmployee from "./salesEmployee.js";
import salesManager from "./salesManager.js";
import IApprisable from "./Interfaces/IApprisable.js"
import ITrainer from "./Interfaces/ITrainer.js"

var empRef=typeof(employee);
console.log(empRef);

var salesEmpRef=typeof(salesEmployee);
console.log(salesEmpRef);

var salesMgeRef=typeof(salesManager);
console.log(salesMgeRef);

var emp=new employee(1,"Nirjala",80000,10000,3000);
console.log(`Employee Salary : ${emp.computePay()}`);
console.log(emp);


var salesEmp=new salesEmployee(1,"Nirjala",90000,80000,20000,5000);
console.log(`Sales Employee Salary: ${salesEmp.computePay()}`);
console.log(salesEmp);
salesEmp.doWork();


var salesMgr=new salesManager(1,"Nirjala",90000,80000,20000,5000,2000);
console.log(`Sales Manager :${salesMgr.computePay()}`);
console.log(salesMgr);
salesMgr.doWork();

Object.assign(salesManager.prototype,IApprisable.prototype);
Object.assign(salesManager.prototype,ITrainer.prototype);

Object.assign(salesEmployee.prototype,IApprisable.prototype);
Object.assign(salesEmployee.prototype,ITrainer.prototype);

const staff=[
        new salesEmployee(1, "Nirjala", 25000, 5000),
        new salesManager(2, "Sahil", 40000, 8000, 10000)
];
for (const trainer of staff){
    console.log(`Id :${trainer.id},Name : ${trainer.name},Pay :${trainer.computePay()}`);
    trainer.conductTraining();

}
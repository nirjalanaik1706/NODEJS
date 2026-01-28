import employee from "./employee.js";
import salesEmployee from "./salesEmployee.js";
import salesManager from "./salesManager.js";

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

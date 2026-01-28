import salesEmployee from "./salesEmployee.js";

class salesManager extends salesEmployee{
    constructor(id,name,basicSalary,hra,tax,commision,bonus){
        super(id,name,basicSalary,hra,tax,commision);
        this.bonus=bonus;
    }

    computePay(){
        return super.computePay()+this.bonus;
    }

    doWork(){
        console.log("SalesManager is working ")
    }

    conductTraining(){
        console.log("Trainer conducting a trainning");
    }

    conductSession(){
        console.log("Trainer is conducting a session");
    }
}
export default salesManager;
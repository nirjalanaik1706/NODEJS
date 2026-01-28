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
}
export default salesManager;
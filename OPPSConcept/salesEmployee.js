import employee from "./employee.js";

class salesEmployee extends employee{

    constructor(id,name,basicSalary,hra,tax,commision){
        super(id,name,basicSalary,hra,tax);
        this.commision=commision;
    }

    computePay(){
        return super.computePay()+this.commision;
    }

    doWork(){
        console.log("This is a do work");
    }
    conductTraining(){
        console.log("Trainer hands-on a trainning");
    }

    conductSession(){
        console.log("Trainer hands-on a session");
    }
}
export default salesEmployee;
class employee{
    constructor(id,name,basicSalary,hra,tax){
        this.id=id;
        this.name=name;
        this.basicSalary=basicSalary;
        this.hra=hra;
        this.tax=tax;
    }

    computePay(){
        return this.basicSalary+this.hra-this.tax;   
    }

    doWork(){
        throw new Error("Method will be work");
    }
}
 export default employee;
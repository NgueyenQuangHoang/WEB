class Employees{
    constructor(name , position){
        this.name = name;
        this.position = position;
    }
}

class Company{
    constructor(name, location, employees){
        this.name = name;
        this.location = location;
        this.employees = employees;
    }
    display(){
        console.log("Company's Name: " + this.name);
        console.log("location: " + this.location);
        console.log("Danh Sach nhan vien: ")
        this.employees.forEach(employee => {
            console.log(`- ${employee.name} (${employee.position})`)
        })
    }
}

let employees = [
    new Employees("Nguyen Van Luan", "Developer"),
    new Employees("Nguyen Van Hoang", "Tester"),
    new Employees("Hoang Nam Cao", "Manager"),
];
let company = new Company("Rikkei", "HoChiMinh", employees)

company.display();
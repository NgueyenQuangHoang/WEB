class Employee{
    constructor(id , name , position , salary){
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class Company{
    constructor() {
        this.employees= [];
    }

    addEmployee(){
        const  id = parseInt(prompt("enter employee's id:"));
        if (isNaN(id) || this.employees.some((emp) => emp.id === id)){
            alert("Id is isvalid or Id had already exist");
            return;
        }
        const name = prompt("Enter employee's name:");
        const position = prompt("Enter employee's position:");
        const salary = parseFloat(prompt("Enter employee's salary:"));
        if (isNaN(salary) || salary <= 0) {
            alert("Invalid salary value.");
            return;
        }
        const newEmployee = new Employee(id, name, position, salary);
        this.employees.push(newEmployee);
        alert("Employee added successfully!");
    }

    removeEmployee(){
        const id = parseInt(prompt("enter Employee's ID to remove"));
        const index = this.employees.findIndex(exp => emp.id === id);
        if (index !== -1){
            this.employees.splice(index,1);
            alert("Employee is removed")
        }else{
            alert(`No Employee had ID : ${id}`);
        }
    }


    updateSalary(){
        const id = parseInt(prompt("enter Employee's Id to update salary"));
        const employee = this.employees.find(emp => emp.id === id);
        if (employee){
            const newSalary = parseFloat(prompt(`New salary for ${employee.name}:`));
            if (isNaN(newSalary) || newSalary <= 0) {
                alert("Invalid salary value.");
                return;
            }
            employee.salary = newSalary;
            alert(`Salary updated for ${employee.name}`);
        }
    }

    displayEmployees(){
        if (this.employees.length === 0){
            alert("No employees found.");
            return;
        }else{
            let employeeList = "Employee List" + "\n";
            this.employees.forEach(emp => {
                employeeList += `ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}\n`;
            });
            alert(employeeList);
        }
    }
}

const company = new Company();

function showMenu(){
    let menu = "1. Add Employee\n" +
        "2. Remove Employee\n" +
        "3. Update Salary\n" +
        "4. Display Employees\n" +
        "5. Exit\n";
    return parseInt(prompt(menu));
}

let choice;
do {
    choice = showMenu();
    switch (choice){
        case 1:
            company.addEmployee();
            break;
        case 2:
            company.removeEmployee();
            break;
        case 3:
            company.updateSalary();
            break;
        case 4:
            company.displayEmployees();
            break;
        case 5:
            alert("Exiting...");
            break;
        default:
            alert("Invalid choice. Please try again.");
    }
}while (choice !== 5);
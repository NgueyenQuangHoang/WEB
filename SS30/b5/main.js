let employeeList = [];

class Employee {
    constructor(stt, name, age, address){
        this.stt = stt;
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

employeeList.push(new Employee(1, "John Doe", 25, "123 Main St"));
employeeList.push(new Employee(2, "Jane Smith", 30, "456 Elm St"));
employeeList.push(new Employee(3, "Alice Johnson", 28, "789 Oak St"));
employeeList.push(new Employee(4, "Bob Brown", 35, "101 Pine St"));
employeeList.push(new Employee(5, "Charlie Davis", 40, "202 Maple St"));

const tableDataEl = document.querySelector(".table_data");

function renderData() {
  let dataHtml = ``;
  for (let i = 0; i < employeeList.length; i++) {
    dataHtml += `
        <tr>
            <td>${employeeList[i].stt}</td>
            <td>${employeeList[i].name}</td>
            <td>${employeeList[i].age}</td>
            <td>${employeeList[i].address}</td>
        </tr>
        `;
  }
  tableDataEl.innerHTML = dataHtml;
}

renderData();
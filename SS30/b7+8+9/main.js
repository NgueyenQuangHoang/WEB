let todolist = [];

class Todolist{
    constructor(id, task, completed){
        this.id = id;
        this.task = task;
        this.completed = Boolean(completed);
    }
}

todolist.push(
    new Todolist(1, "Hit the Gym", false),
    new Todolist(2, "Pay bills", false),
    new Todolist(3, "Meet geoge", false),
    new Todolist(4, "Buy eggs", false),
    new Todolist(5, "Read a book", false),
    new Todolist(6, "Organize office", false)
);


const todolistData = document.querySelector("#myUL")
function renderData(){
    let dataHtml = ``;
    for(let i = 0; i < todolist.length; i++){
        dataHtml += `
            <li>${todolist[i].task}<span class="close">X</span></li>                
        `;
    }
    todolistData.innerHTML = dataHtml
}

renderData();

document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("myUL");

    taskList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    });
});

document.querySelector("#myInput")

const input = prompt("emter frust");

const arr = input && input.split(",") || [];

if (arr.length === 0){
    alert("null");
}

let result = arr.filter((element) => element.length >=5 );

console.log("result")
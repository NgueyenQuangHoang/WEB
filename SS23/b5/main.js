const input = prompt("emter number");

const arr = input && input.split(",") || [];

if (arr.length === 0){
    alert("null");
}

let max = Math.max(...arr)

alert(`Max value: ${max}, Position: ${arr.indexOf(max.toString())}`);
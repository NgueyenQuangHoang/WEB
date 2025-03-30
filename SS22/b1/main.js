const input = prompt("Enter a string:");

let arr = input && input.split(',') || [];

for(let Num of arr){
    if (isNaN(Num)) {
        alert("Invalid input, please enter numbers only.");
        break;
    }
    let min = Math.min(...arr);

    alert(`The minimum number is ${min}`);
}
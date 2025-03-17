let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");

let _ranNum = Math.floor(Math.random() * (Number(b) - Number(a) +1)) + Number(a);
alert("The random number is: " + _ranNum);
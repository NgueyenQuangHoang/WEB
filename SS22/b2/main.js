const input = prompt("Enter a string:");

let arr = input && input.split(',') || [];

for( let Num of arr){
    if (arr.length === 0){
        alert("please enter a string");
        break;
    }
    if (arr.length > 2){
        alert("please enter 2 number")
        break;
    }
    if (isNaN(Num)){
        alert("Isvalid number, please enter Number only")
        break;
    }
}
let sum = arr.reduce((acc, curr) => acc + Number(curr), 0);
alert(`The sum of the numbers is: ${sum}`);
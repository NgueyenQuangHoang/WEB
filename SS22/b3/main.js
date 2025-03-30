const input = prompt("please enter string of number:")

const arr = input && input.split(',') || [];

for (let Num of arr){
    if (isNaN(Num)){
        alert("isvalid input. Please enter again: ");
        break;
    }
}

let oddNumbers = arr.filter(Num => Num % 2 == 0);

if (oddNumbers.length === 0){
    alert("Array not contain even numbers");
}else{
    alert(oddNumbers);
}
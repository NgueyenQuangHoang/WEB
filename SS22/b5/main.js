const input = prompt("please enter string of number:")

const arr = input && input.split(',') || [];

let positiveInteger = arr.filter((Num) => Num > 0);

if (positiveInteger === 0){
    alert("Array not contain positive integer")
}else{
    alert(positiveInteger.length)
}

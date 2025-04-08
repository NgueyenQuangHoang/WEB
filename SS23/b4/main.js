const input = prompt("emter number");

const arr = input && input.split(",") || [];

if (arr.length === 0){
    alert("null");
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let result = arr.filter((Num) => isPrime(Num));

console.log(result);

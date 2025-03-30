const input = prompt("please enter string of number:")

const arr = input && input.split(',') || [];

for (let Num of arr) {
    if (isNaN(Num)) {
        alert("Invalid input. Please enter again.");
        break;
    }
    Num = parseInt(Num, 10);
    if (Num < 2) {
        alert(`${Num} is not a prime number.`);
        continue;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(Num); i++) {
        if (Num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert(`${Num} is a prime number.`);
    } else {
        alert(`${Num} is not a prime number.`);
    }
}
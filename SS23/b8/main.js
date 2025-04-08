function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterOddPrimes(arr) {
    return arr.filter(num => num % 2 !== 0 && isPrime(num));
}

function main() {
    const input = prompt("Nhập vào mảng số nguyên (10-20 phần tử), cách nhau bởi dấu phẩy:");
    const arr = input.split(',').map(Number);

    if (arr.length < 10 || arr.length > 20) {
        console.error("Mảng phải có từ 10 đến 20 phần tử.");
        return;
    }

    const oddPrimes = filterOddPrimes(arr);
    console.log("Các số nguyên tố là số lẻ trong mảng:", oddPrimes);
}

main();

let numbers = [];
for (let i = 0; i < 10; i++) {
    let input = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`), 10);
    numbers.push(input);
}

// Sử dụng map để bình phương các phần tử trong mảng
let squaredNumbers = numbers.map(num => num ** 2);

// Sử dụng filter để lọc ra các giá trị là số chẵn
let evenNumbers = squaredNumbers.filter(num => num % 2 === 0);

console.log("Mảng ban đầu:", numbers);
console.log("Mảng sau khi bình phương:", squaredNumbers);
console.log("Các giá trị là số chẵn:", evenNumbers);
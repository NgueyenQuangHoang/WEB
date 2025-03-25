
let numbers = [5, 3, 8, 3, 1, 9, 5, 7, 8, 2];

let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}

uniqueNumbers.sort((a, b) => a - b);

console.log("Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần:", uniqueNumbers);

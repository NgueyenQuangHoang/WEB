// Chương trình tìm số lớn nhất trong 3 số bất kỳ
const num1 = parseFloat(prompt("Nhập số thứ nhất:"));
const num2 = parseFloat(prompt("Nhập số thứ hai:"));
const num3 = parseFloat(prompt("Nhập số thứ ba:"));

const max = (num1 > num2) 
    ? (num1 > num3 ? num1 : num3) 
    : (num2 > num3 ? num2 : num3);

console.log(`Số lớn nhất trong 3 số là: ${max}`);
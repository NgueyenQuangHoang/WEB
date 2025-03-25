
const input = prompt("Nhập vào dãy số, cách nhau bởi dấu phẩy:");


const numbers = input.split('').map(Number);

let max = numbers[0];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
}

console.log("Số lớn nhất trong mảng là: " + max);


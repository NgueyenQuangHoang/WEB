
let input = prompt("Nhập vào dãy số, các số cách nhau bởi dấu phẩy:");


let numbers = input.split('').map(Number);

if (numbers.length === 0) {
    alert("Vui lòng nhập ít nhất một số.");
}
else if (numbers.some(isNaN)) {
    alert("Vui lòng nhập dãy số hợp lệ.");
}

let reversedNumbers = numbers.reverse();


console.log("Mảng sau khi đảo ngược:", reversedNumbers);
alert("Mảng sau khi đảo ngược: " + reversedNumbers.join(''));
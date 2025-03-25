let numbers = [1, 2, 3, 4, 5];

let n = parseInt(prompt("Nhập một số:"));

if(numbers.includes(n)){
    console.log("Có số " + n + " trong mảng");
}else{
    console.log("Không có số " + n + " trong mảng");
}
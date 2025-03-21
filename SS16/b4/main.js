const num = prompt("Nhập số nguyên từ 0 đến 999");

function checkFizzBuzz(){
    if(num < 0 || num > 999 || !Number.isInteger(num)){
        return "Vui lòng nhập số nguyên từ 0 đến 999";
    }

    if(num % 3 === 0 && num % 5 === 0){
        alert("FizzBuzz");
        return;
    }
    if(num % 3 === 0){
        alert("Fizz");
        return;
    }
    if(num % 5 === 0){
        alert("Buzz");
        return;
    }else{
        alert("Không phải FizzBuzz");
        return;
    }

}
const input = prompt("Pls enter string:");

const arr = input && input.split(",") || [];

if (arr.length === 0){
    console.log("null");
}

for (let Num of arr){
    if (isNaN(Num)){
        console.log("isvalid input!");
    }
}

let result = arr.filter((Num) => Num >= 10);

if (result.length === 0){
    console.log("arr not contain any element > 10!")
}else{
    console.log(result);
}
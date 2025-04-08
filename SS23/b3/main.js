const input = prompt("emter Email");

const arr = input && input.split(",") || [];

if (arr.length === 0){
    alert("null");
}




    let isvalidEmail = arr.filter(element => element. && element !== ' ');
    console.log(isvalidEmail)


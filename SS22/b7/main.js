let str = prompt("Enter string:")

function capitalizeFirstLetterOfEachWord(input){
    let result = input.split(" ");
    for (let i = 0 ; i < result.length ; i++){
        if (result[i].length > 0){
            result[i] = result[i][0].toUpperCase() + result[i].slice(1);
        }
    }
    return result.join(" ")
}

str = capitalizeFirstLetterOfEachWord(str);

alert(str);
const input = prompt("Enter string:")

// const array = input && input.split(",") || [];


function isPalindrome(arr){
    let j = arr.length - 1;
    for(let i = 0 ; i < arr.length / 2 ; i++){
        if(arr[i] !== arr[j]){
            return false;
        }
        j--;
    }
    return true;
}

if(isPalindrome(input)){
    alert("This chain is symmetrical!");
}else{
    alert("This chain is not symmetrical!");
}
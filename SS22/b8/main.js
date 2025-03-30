let input = prompt("Enter a string: ");

function checkStrongPassword(password){
    if(password.length < 8){
        console.log("password must be at least 8 index!")
    }
    let upperCaseCount = 0;
    let lowerCaseCount = 0;
    let numberCount = 0;
    for (let i = 0; i < password.length ; i++){
        if ( password[i] >= 'A' && password[i] <= 'Z'){
            upperCaseCount++;
        }
        if ( password[i] >= 'a' && password[i] <= 'z'){
            lowerCaseCount++;
        }
        if ( password[i] >= 0 && password[i] <= 9){
            numberCount++
        }
    }

    if ( upperCaseCount == 0){
        console.log("password must have 1 uppercase!")
    }
    if (lowerCaseCount == 0) {
        console.log("password must have 1 lowercase!");
    }
    if (numberCount == 0) {
        console.log("password must have 1 number!");
    }
    if (password.length >= 8 && upperCaseCount > 0 && lowerCaseCount > 0 && numberCount > 0) {
        console.log("password is strong!");
    }
}

checkStrongPassword(input);
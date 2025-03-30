let users = [];

let inputEmail = prompt(" enter your email:");

function checkEmail(input){
    let result = input.split(".");

    if (!input.includes("@")){
        console.log("Email must have '@':");
        return false;
    }

    if (!input.endsWith(".com") && !input.endsWith(".vn")) {
        console.log("Email must end with '.com' or '.vn':");
        return false;
    }
    return true;
}

if (checkEmail(inputEmail)) {
    if (users.includes(inputEmail)) {
        console.log("Account already exists!");
    } else {
        users.push(inputEmail);
        console.log("Account successfully created!");
    }
}
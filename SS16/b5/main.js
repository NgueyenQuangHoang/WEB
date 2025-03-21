function containsSpace(input) {
    return input.includes(' ');
}


const userInput = prompt("Nhập vào một chuỗi:");
if (containsSpace(userInput)) {
    console.log("Chuỗi có chứa dấu cách.");
} else {
    console.log("Chuỗi không chứa dấu cách.");
}
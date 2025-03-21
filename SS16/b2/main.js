function isAlphabetCharacter(char) {
    if (char.length !== 1) {
        return false;
    }
    if( char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z'){
        return true;
    }
    return regex.test(char);
}

const input = prompt("Nhập một ký tự:");
if (isAlphabetCharacter(input)) {
    console.log(`${input} là một chữ cái.`);
} else {
    console.log(`${input} không phải là một chữ cái.`);
}
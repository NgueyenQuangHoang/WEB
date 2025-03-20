function checkTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Tam giác đều";
        } else if (a === b || b === c || a === c) {
            return "Tam giác cân";
        } else if (
            a * a + b * b === c * c ||
            a * a + c * c === b * b ||
            b * b + c * c === a * a
        ) {
            return "Tam giác vuông";
        } else {
            return "Tam giác thường";
        }
    } else {
        return "Không phải tam giác hợp lệ";
    }
}

const a = parseFloat(prompt("Nhập cạnh a:"));
const b = parseFloat(prompt("Nhập cạnh b:"));
const c = parseFloat(prompt("Nhập cạnh c:"));

const result = checkTriangle(a, b, c);
console.log(result);
alert(result);

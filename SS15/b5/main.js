let epxYear = parseInt(prompt("Enter your year of experience"));

function checkExperience() {
    if (epxYear < 1) {
        console.log("Mới vào nghề");
    } else if (epxYear >= 1 && epxYear <= 3) {
        console.log("Nhân viên có kinh nghiệm");
    } else if (epxYear >= 4 && epxYear <= 6) {
        console.log("Chuyên viên");
    } else {
        console.log("Quản lý");
    }
}
checkExperience();
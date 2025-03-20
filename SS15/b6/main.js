function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

const year = parseInt(prompt("Nhập một năm bất kỳ: "), 10);

if (isNaN(year)) {
    console.log("Vui lòng nhập một số hợp lệ.");
} else {
    if (isLeapYear(year)) {
        console.log(`${year} là năm nhuận.`);
    } else {
        console.log(`${year} không phải là năm nhuận.`);
    }
}
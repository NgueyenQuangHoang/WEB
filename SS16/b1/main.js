const prompt = require('prompt-sync')();

const month = parseInt(prompt("Nhập vào một tháng (1-12): "));

if (month < 1 || month > 12) {
    console.log("Tháng không hợp lệ. Vui lòng nhập từ 1 đến 12.");
} else {
    let days;
    switch (month) {
        case 2:
            days = 28; // Tháng 2 có 28 ngày (không xét năm nhuận)
            console.log(`Tháng ${month} có ${days} hoặc 29 ngày (nếu là năm nhuận).`);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            console.log(`Tháng ${month} có ${days} ngày.`);
            break;
        default:
            days = 31;
            console.log(`Tháng ${month} có ${days} ngày.`);
            break;
    }
}
const readline = require('readline');

// Chương trình xác định mùa trong năm dựa trên tháng người dùng nhập vào

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nhập vào một tháng bất kỳ trong năm (1-12): ', (input) => {
    const month = parseInt(input);

    if (month >= 1 && month <= 12) {
        if (month >= 1 && month <= 3) {
            console.log('Mùa xuân');
        } else if (month >= 4 && month <= 6) {
            console.log('Mùa hạ');
        } else if (month >= 7 && month <= 9) {
            console.log('Mùa thu');
        } else if (month >= 10 && month <= 12) {
            console.log('Mùa đông');
        }
    } else {
        console.log('Vui lòng nhập một tháng hợp lệ (1-12).');
    }

    rl.close();
});
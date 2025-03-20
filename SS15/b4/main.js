document.addEventListener('DOMContentLoaded', function() {
    const numberToText = {
        0: 'Số Không',
        1: 'Số Một',
        2: 'Số Hai',
        3: 'Số Ba',
        4: 'Số Bốn',
        5: 'Số Năm',
        6: 'Số Sáu',
        7: 'Số Bảy',
        8: 'Số Tám',
        9: 'Số Chín'
    };

    const number = parseInt(prompt('Vui lòng nhập số từ 0 đến 9'), 10);
    if (number >= 0 && number <= 9) {
        alert(numberToText[number]);
    } else {
        alert('Vui lòng nhập số từ 0 đến 9');
    }
});

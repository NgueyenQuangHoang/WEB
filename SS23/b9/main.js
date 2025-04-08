function tinhTongChanLe(arr) {
    let tongChan = 0;
    let tongLe = 0;

    arr.forEach(num => {
        if (num % 2 === 0) {
            tongChan += num;
        } else {
            tongLe += num;
        }
    });

    return { tongChan, tongLe };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = tinhTongChanLe(numbers);
console.log("Tổng số chẵn:", result.tongChan);
console.log("Tổng số lẻ:", result.tongLe);
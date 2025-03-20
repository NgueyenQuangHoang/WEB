function convertTo12HourFormat(hour, minute, second) {
    let period = "AM";

    if (hour >= 12) {
        period = "PM";
        if (hour > 12) {
            hour -= 12;
        }
    } else if (hour === 0) {
        hour = 12;
    }

    minute = minute.toString().padStart(2, '0');
    second = second.toString().padStart(2, '0');

    return `${hour}:${minute}:${second} ${period}`;
}

const hour = parseInt(prompt("Nhập giờ (0-23):"), 10);
const minute = parseInt(prompt("Nhập phút (0-59):"), 10);
const second = parseInt(prompt("Nhập giây (0-59):"), 10);

if (
    hour >= 0 && hour <= 23 &&
    minute >= 0 && minute <= 59 &&
    second >= 0 && second <= 59
) {
    const result = convertTo12HourFormat(hour, minute, second);
    console.log("Thời gian định dạng 12 giờ:", result);
} else {
    console.log("Dữ liệu nhập không hợp lệ.");
}
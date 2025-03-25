const prompt = require('prompt-sync')();

let array = [];

function displayMenu() {
    console.log("\nMENU");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Thêm phần tử");
    console.log("4. Sửa phần tử");
    console.log("5. Xóa phần tử");
    console.log("6. Thoát");
    const choice = parseInt(prompt("Lựa chọn của bạn: "));
    return choice;
}

function inputArray() {
    const input = prompt("Nhập các phần tử của mảng, cách nhau bởi dấu phẩy: ");
    array = input.split(',').map(item => item.trim());
    console.log("Mảng đã được nhập.");
}

function displayArray() {
    console.log("Mảng hiện tại:", array);
}

function addElement() {
    const element = prompt("Nhập phần tử muốn thêm: ");
    array.push(element);
    console.log("Đã thêm phần tử.");
}

function editElement() {
    const index = parseInt(prompt("Nhập vị trí muốn sửa (bắt đầu từ 0): "));
    if (index >= 0 && index < array.length) {
        const newValue = prompt("Nhập giá trị mới: ");
        array[index] = newValue;
        console.log("Đã sửa phần tử.");
    } else {
        console.log("Vị trí không hợp lệ.");
    }
}

function deleteElement() {
    const index = parseInt(prompt("Nhập vị trí muốn xóa (bắt đầu từ 0): "));
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
        console.log("Đã xóa phần tử.");
    } else {
        console.log("Vị trí không hợp lệ.");
    }
}

function main() {
    let running = true;
    while (running) {
        const choice = displayMenu();
        switch (choice) {
            case 1:
                inputArray();
                break;
            case 2:
                displayArray();
                break;
            case 3:
                addElement();
                break;
            case 4:
                editElement();
                break;
            case 5:
                deleteElement();
                break;
            case 6:
                running = false;
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    }
}

main();
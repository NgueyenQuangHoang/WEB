function integerMenu() {
    let numbers = [];
    let choice;

    do {
        // Hiển thị menu trên alert
        choice = parseInt(prompt(
            "=== Menu Xử Lý Số Nguyên ===\n" +
            "1. Nhập danh sách số nguyên\n" +
            "2. Tính trung bình các số\n" +
            "3. Tìm số chẵn lớn nhất\n" +
            "4. Tìm số lẻ nhỏ nhất\n" +
            "5. Thoát\n" +
            "Nhập lựa chọn của bạn (1-5):"
        ));

        let result;
        switch (choice) {
            case 1: {
                const input = prompt("Nhập danh sách số nguyên, cách nhau bởi dấu phẩy (,):");
                numbers = input.split(",").map(num => parseInt(num.trim()));
                result = `Danh sách số nguyên đã nhập: ${numbers.join(", ")}`;
                break;
            }
            case 2: {
                if (numbers.length > 0) {
                    const sum = numbers.reduce((acc, num) => acc + num, 0);
                    const average = sum / numbers.length;
                    result = `Trung bình các số: ${average}`;
                } else {
                    result = "Danh sách số nguyên đang trống. Vui lòng nhập danh sách trước.";
                }
                break;
            }
            case 3: {
                const evenNumbers = numbers.filter(num => num % 2 === 0);
                if (evenNumbers.length > 0) {
                    const maxEven = Math.max(...evenNumbers);
                    result = `Số chẵn lớn nhất: ${maxEven}`;
                } else {
                    result = "Không có số chẵn trong danh sách.";
                }
                break;
            }
            case 4: {
                const oddNumbers = numbers.filter(num => num % 2 !== 0);
                if (oddNumbers.length > 0) {
                    const minOdd = Math.min(...oddNumbers);
                    result = `Số lẻ nhỏ nhất: ${minOdd}`;
                } else {
                    result = "Không có số lẻ trong danh sách.";
                }
                break;
            }
            case 5:
                alert("Thoát chương trình. Tạm biệt!");
                break;
            default:
                result = "Lựa chọn không hợp lệ. Vui lòng thử lại.";
        }

        if (result) {
            alert(result);
        }
    } while (choice !== 5);
}


integerMenu();
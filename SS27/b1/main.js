function calculatorMenu() {
    let choice;
    do {
        // Hiển thị menu trên alert
        choice = parseInt(prompt(
            "=== Menu Tính Toán ===\n" +
            "1. Cộng hai số\n" +
            "2. Trừ hai số\n" +
            "3. Nhân hai số\n" +
            "4. Chia hai số\n" +
            "5. Thoát\n" +
            "Nhập lựa chọn của bạn (1-5):"
        ));

        if (choice >= 1 && choice <= 4) {
            const num1 = parseFloat(prompt("Nhập số thứ nhất:"));
            const num2 = parseFloat(prompt("Nhập số thứ hai:"));
            let result;

            switch (choice) {
                case 1:
                    result = `${num1} + ${num2} = ${num1 + num2}`;
                    break;
                case 2:
                    result = `${num1} - ${num2} = ${num1 - num2}`;
                    break;
                case 3:
                    result = `${num1} * ${num2} = ${num1 * num2}`;
                    break;
                case 4:
                    if (num2 !== 0) {
                        result = `${num1} / ${num2} = ${num1 / num2}`;
                    } else {
                        result = "Lỗi: Không thể chia cho 0.";
                    }
                    break;
            }

            // Hiển thị kết quả trên alert
            alert(`Kết quả: ${result}`);
        } else if (choice !== 5) {
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (choice !== 5);

    alert("Thoát chương trình. Tạm biệt!");
}


calculatorMenu();
function geometryMenu() {
    let choice;
    do {
        // Hiển thị menu trên alert
        choice = parseInt(prompt(
            "=== Menu Tính Toán Hình Học ===\n" +
            "1. Tính diện tích hình tròn\n" +
            "2. Tính chu vi hình tròn\n" +
            "3. Tính diện tích hình chữ nhật\n" +
            "4. Tính chu vi hình chữ nhật\n" +
            "5. Thoát\n" +
            "Nhập lựa chọn của bạn (1-5):"
        ));

        let result;
        switch (choice) {
            case 1: {
                const radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
                if (radius > 0) {
                    result = `Diện tích hình tròn: ${Math.PI * radius * radius}`;
                } else {
                    result = "Lỗi: Bán kính phải lớn hơn 0.";
                }
                break;
            }
            case 2: {
                const radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
                if (radius > 0) {
                    result = `Chu vi hình tròn: ${2 * Math.PI * radius}`;
                } else {
                    result = "Lỗi: Bán kính phải lớn hơn 0.";
                }
                break;
            }
            case 3: {
                const length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
                const width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
                if (length > 0 && width > 0) {
                    result = `Diện tích hình chữ nhật: ${length * width}`;
                } else {
                    result = "Lỗi: Chiều dài và chiều rộng phải lớn hơn 0.";
                }
                break;
            }
            case 4: {
                const length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
                const width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
                if (length > 0 && width > 0) {
                    result = `Chu vi hình chữ nhật: ${2 * (length + width)}`;
                } else {
                    result = "Lỗi: Chiều dài và chiều rộng phải lớn hơn 0.";
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

// Gọi hàm để chạy chương trình
geometryMenu();
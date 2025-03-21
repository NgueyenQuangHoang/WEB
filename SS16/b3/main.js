function changeMoney(){
    const choose = prompt("lựa chọn giá trị đổi: ")

    switch(choose){
        case "1":
            let usd = parseFloat(prompt("Nhập số tiền USD: "));
            let convertedVnd = usd * 23000;
            console.log(`Số tiền VND là: ${convertedVnd}`);
            break;
        case "2":
            let vnd = parseFloat(prompt("Nhập số tiền VND: "));
            let convertedUsd = vnd / 23000;
            console.log(`Số tiền USD là: ${convertedUsd}`);
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
}

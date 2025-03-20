function numberToWorld(num){
    if(num < 0 || num > 999 || !Number.isInteger(num)){
        return "Vui lòng nhập số nguyên từ 0 đến 999";
    }

    const ones = ["Không", "Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín"];

    const tens = ["Mười", "Hai Mươi", "Ba Mươi", "Bốn Mươi", "Năm Mươi", "Sáu Mươi", "Bảy Mươi", "Tám Mươi", "Chín Mươi"];

    let result = "";

    if(num === 0){
        return ones[0];
    }
    const hundreds = Math.floor(num / 100);

}

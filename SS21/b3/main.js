let array = [];

function menu(){
    alert(`1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4. Tính tổng và trung bình cộng của các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng không
        7. Thoát chương trình`);
}

function inputArray(){
    let n = parseInt(prompt("Nhập số phần tử của mảng: "));
    for(let i = 0; i < n; i++){
        let element = parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `));
        array.push(element);
    }
}

function showArray(){
    if(array.length == 0){
        alert("Mảng rỗng.");
    }else{
        alert("Mảng hiện tại là: " + array.join(", "));
    }
}

function findMax(){
    let max = array[0];
    let index = 0;
    for(let i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
            index = i;
        }
    }
    alert(`Phần tử lớn nhất trong mảng là: ${max} tại vị trí ${index}`);
}

function sumPositive(){
    let sum = 0;
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            sum += array[i];
            count++;
        }
    }
    let avg = sum / count;
    alert(`Tổng các số dương trong mảng là: ${sum}, Trung bình cộng là: ${avg}`);
}

function reverseArray(){
    let reversed = array.reverse();
    alert("Mảng sau khi đảo ngược là: " + reversed.join(", "));
}

do{
    menu();
    let choice = parseInt(prompt("Chọn chức năng: "));
    switch(choice){
        case 1:
            inputArray();
            break;
        case 2:
            showArray();
            break;
        case 3:
            findMax();
            break;
        case 4:
            sumPositive();
            break;
        case 5:
            reverseArray();
            break;
        case 6:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
    }
} while(true);
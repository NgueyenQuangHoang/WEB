function menu(){
    alert(`1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ hai trong mảng
        7. Thoát chương trình`);
}

function inputArray(){
    let n = parseInt(prompt("nhap so phan tu cua mang: "));
    for( let i = 0; i < n; i++){
        let element = parseInt(prompt(`nhap phan tu thu ${i + 1}: `));
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

function findEvenOdd(){
    let even = 0;
    let odd = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            even = array[i];
            alert(`Các phần tử chẵn trong mảng là: ${even}`);
            even++;
        }else{
            odd = array[i];
            alert(`Các phần tử lẻ trong mảng là: ${odd}`);
            odd++;
        }
    }
}

function average(){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    let avg = sum / array.length;
    alert(`Trung bình cộng của mảng là: ${avg}`);
}

function deleteElement(){
    let index = parseInt(prompt("Nhập vij trí muốn xóa: "));
    if(index < 0 || index >= array.length){
        alert("Vị trí không hợp lệ.");
    }
    else{
        array.splice(index, 1);
        alert("Mảng sau khi xóa phần tử: " + array.join(", "));
    }
}

function findSecondMax(){
    if(array.length < 2){
        alert("Mảng không đủ phần tử.");
        return;
    }
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    let secondMax = array[array.length - 2];
    alert(`Phần tử lớn thứ hai trong mảng là: ${secondMax}`);
}

let array = [];
let choice = 0;
do{
    menu();
    choice = parseInt(prompt("Nhập lựa chọn của bạn: "));
    switch(choice){
        case 1:
            inputArray();
            break;
        case 2:
            showArray();
            break;
        case 3:
            findEvenOdd(array);
            break;
        case 4:
            average(array);
            break;
        case 5:
            deleteElement(array);
            break;
        case 6:
            findSecondMax(array);
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
}while(true);
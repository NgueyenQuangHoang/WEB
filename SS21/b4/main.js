let array = [];

function menu(){
alert('1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n5. Tính trung bình cộng các phần tử của một hàng cụ thể\n6. Đảo ngược các hàng trong mảng\n7. Thoát chương trình');
}

function inputArray(){
    let rows = parseInt(prompt("Nhập số hàng của mảng: "));
    let cols = parseInt(prompt("Nhập số cột của mảng: "));
    for(let i = 0; i < rows; i++){
        array[i] = [];
        for(let j = 0; j < cols; j++){
            let element = parseInt(prompt(`Nhập phần tử tại vị trí [${i}][${j}]: `));
            array[i][j] = element;
        }
    }
}

function showArray(){
    let result = "Mảng hiện tại là:\n";
    for(let i = 0; i < array.length; i++){
        result += array[i].join(", ") + "\n";
    }
    alert(result);
}

function sumArray(){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            sum += array[i][j];
        }
    }
    alert(`Tổng các phần tử trong mảng là: ${sum}`);
}

function findMax(){
    let max = array[0][0];
    let index = {row: 0, col: 0};
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(array[i][j] > max){
                max = array[i][j];
                index.row = i;
                index.col = j;
            }
        }
    }
    alert(`Phần tử lớn nhất trong mảng là: ${max} tại vị trí [${index.row}][${index.col}]`);
}

function averageRow(){
    let row = parseInt(prompt("Nhập số hàng muốn tính trung bình cộng: "));
    if(row < 0 || row >= array.length){
        alert("Hàng không hợp lệ.");
        return;
    }
    let sum = 0;
    for(let j = 0; j < array[row].length; j++){
        sum += array[row][j];
    }
    let avg = sum / array[row].length;
    alert(`Trung bình cộng của hàng ${row} là: ${avg}`);
}

function reverseRows(){
    for(let i = 0; i < array.length; i++){
        array[i].reverse();
    }
    alert("Mảng sau khi đảo ngược các hàng là:\n" + array.join(", "));
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
            sumArray();
            break;
        case 4:
            findMax();
            break;
        case 5:
            averageRow();
            break;
        case 6:
            reverseRows();
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
    }
}while(true);
function inputArray(){
    const input = prompt("Nhập vào số phần tử của mảng: ");
    const n = parseInt(input, 10);

    if (isNaN(n) || n <= 0){
        alert("Vui lòng nhập một số nguyên dương hợp lệ.");
    }else{
        array = [];
        for (let i = 0; i < n; i++){
            const element = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}: `));
            if (!isNaN(element)) {
                array.push(element);
            } else {
                alert("Phần tử không hợp lệ, bỏ qua.");
            }
        }
    }
}

function showArray(){
    alert(array);
}

function findMaxMin(array){
    if (!array || array.length === 0) {
        alert("Mảng rỗng hoặc không hợp lệ.");
        return;
    }
    let max = array[0];
    let min = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    for(let i = 1; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    alert(`Max number is: ${max} and Min number is: ${min}`);
}

function sumArray(){
    let sumArray = 0;
    for (let i = 0; i < array.length; i++) {
        sumArray += array[i];
    }
    alert(`Tổng các phần tử trong mảng là: ${sumArray}`);
}

function checkDuplicate(){
    for(let i = 0; i < array.length; i++){
        let count = 0;
        for( let j = 0; j < array.length; j++){
            if(array[i]==array[j]);
            count ++;
        }
        alert(`${array[i]} xuất hiện ${count} lần trong mảng.`);
    }
}

function sortArray(){
    for(let i = 0 ; i < array.length - 1; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

}

let array = [];

do{
    let choice = parseInt(prompt("Choose:\n1. Nhập mảng\n2. Hiện thị mảng\n3. Tìm giá trị lớn nhất\n4. Thoát"), 10);
    switch(choice){
        case 1:
            inputArray();
            break;
        case 2:
            showArray();
            break;
        case 3:
            findMaxMin(array);
            break;
        case 4:
            sumArray();
            break;
        case 5:
            checkDuplicate();
            break;
        case 6:
            sortArray();
            alert("Mảng sau khi sắp xếp: " + array);
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
            break;
    }
}while(true);
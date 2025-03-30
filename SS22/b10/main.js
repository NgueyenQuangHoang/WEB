let products = [["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5 , 8000], ["mèn mén", 30, 20000]];

let cart = [];


function checkAllProduct(){
    let result = "Danh sách sản phẩm:\n";
    for (let i = 0; i < products.length; i++){
        result += `${i + 1}. ${products[i][0]} - ${products[i][1]} - ${products[i][2]}\n`;
    }
    return result;
}

function buyProducts(){
    let inputItem = prompt("enter item");

    if (!products.some(product => product[0] === inputItem)){
        alert("Invalid item!")
        return false;
    }
    
}


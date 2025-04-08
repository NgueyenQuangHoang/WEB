class Cart {
    constructor(products){
        this.products = products;
    }

    totalPrice(){
        return this.products.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

}

class Product{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}


let products = [
    new Product("Men men", 3000, 2),
    new Product("Mi tom", 5000, 1),
    new Product("Banh bao", 15000, 3)
];


let cart = new Cart(products);

console.log(cart);
console.log(cart.totalPrice());
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const Car1 = new Car("Toyota", "Corolla", 2020);

Car1.color = "red";

Car1.year = 2022

console.log(Car1);
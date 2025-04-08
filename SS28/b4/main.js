class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

let Area = new Rectangle(20,30);

console.log(Area.getArea());
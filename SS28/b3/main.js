class Book{
    constructor(title, author, page){
        this.title = title;
        this.author = author
        this.page = page;
    }
}

let Book1 = new Book("javaScript Basic","Jonh Smith","200");

delete Book1.page;

console.log(Book1);

class Person {
    name;
    age;
    job;
    constructor() {
        this.name = "John Doe";
        this.age = 30;
        this.job = "Developer";
    }
}
const p = new Person();
console.log(`Name: ${p.name}`);
console.log(`Age: ${p.age}`);
console.log(`Job: ${p.job}`);
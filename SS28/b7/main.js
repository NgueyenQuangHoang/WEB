class Student{
    constructor(name , scores){
        this.name = name;
        this.scores = scores;
    }

    filter(){
        let newStudentList = this.scores.filter(score => score.average() >= 8);
        return newStudentList;
    }

}


class Scores{
    constructor(math, englist , literature){
        this.math = math;
        this.englist = englist;
        this.literature = literature;
    }

    average(){
        return (this.math + this.englist + this.literature) / 3;
    }

}


const scoresList = [
    new Scores(9, 8, 7),
    new Scores(8, 8, 8),
    new Scores(7, 6, 5),
    new Scores(10, 9, 8),
    new Scores(6, 7, 8),
    new Scores(9, 9, 9)
];

const student = new Student("John Doe", scoresList);


console.log(student.filter());
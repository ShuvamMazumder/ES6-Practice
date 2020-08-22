// class student{
//     constructor (){
//         this.id = 56;
//         this.name = 'shuvam';
//     }
// }
// const student1 = new student();
// const student2 = new student();

// console.log(student1,student2);


class student{
    constructor (sID , sNAME){
        this.id = sID;
        this.name = sNAME;
        this.school= 'CMHS';
    }
}
const student1 = new student(56,'shuvam');
const student2 = new student(49,'himel');
console.log(student1,student2.name);
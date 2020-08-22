//Inheritance, extends class, super, class method

// class parent{
//     constructor(){
//         this.fatherName ='mazumder';
//     }
// }
// class child extends parent{
//     constructor(chName){
//         super();
//         this.sonName = chName;
//     }
// }
// //const parentName = new parent('mazumder');
// const childName = new child('shuvam');
// console.log(childName);

class parent{
    constructor(){
        this.fatherName ='mazumder';
    }
}
class child extends parent{
    constructor(chName){
        super();
        this.sonName = chName;
        }
        getFullName(){
            return this.fatherName + " " +this.sonName;
    }
}

const childName = new child('shuvam');
console.log(childName.getFullName());





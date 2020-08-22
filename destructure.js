//Destructure, Object, array, destructure complex object
const person ={
    name : 'shuvam',
    id : 56,
    address : 'pat khet',
    phNum : 88017,
    gfName : 'gf nai',
    salary : 'bekar'

}
const {name,id,salary,varsity}=person;
console.log(name,id,salary,varsity);

const complexObject ={
    name: 'ali',
    info:{
        address:'kochu khet',
        phNum: 88015,  //ai value pete chai
    }
}
const {phNum} = complexObject.info;
console.log(phNum);
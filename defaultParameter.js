// function add (num1,num2){
//     return num1+num2;
// }

// const total=add(12,12);
// console.log(total);

// function add (num1,num2){
//     // if (num2==undefined)
//     //     num2=0;
//     num2 = num2 || 0;
//     return num1+num2;
// }

// const total =add (12);
// console.log(total);

// backup parameter values ->
function add (num1,num2 =10){  //->default parameter
    return num1+num2;
}

const total=add(12,12);
console.log(total);
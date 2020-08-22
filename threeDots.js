// Spread operator, Concatenate multiples arrays, Array max

const age1 = [12,23,21,4];
const age2 = [45,23,35,6];
const age3 = [23,34,53,2];

//concatenate arrays
const allAges = age1.concat(age2).concat(age3);
console.log(allAges);
//spread operator
const allAges2 = [...age1,...age2,...age3];
console.log(allAges2);

//find max value in array
const business = 450;
const minister =235;
const teacher = 150;
const maxTaka = [23,53,55];
//max value in variable
const maximum = Math.max(business,minister,teacher);
console.log(maximum);
//max value in array
//const maximum2 = Math.max(maxTaka); cant find.
const maximum2 = Math.max(...maxTaka); //spread and find
console.log(maximum2);


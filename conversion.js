let score="33abc"
console.log(parseInt(score));
console.log(typeof(score));
let valueInNumber= Number(score);
console.log(valueInNumber);// It is a disadvantage of js that sometimes it converts a dataype to another vut returns NaN if it is not possible to convert it to a number
console.log(typeof(valueInNumber));

//Number/String to Boolean
//let isLoggedIn=1;
let isLoggedIn="Rudra";
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

//to String
let myVar=34;
let numTOString=String(myVar);
console.log(myVar);
console.log(typeof(numToString));//undefined

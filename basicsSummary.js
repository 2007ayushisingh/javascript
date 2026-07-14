/* Datatype prmitive[call by value] and non-primitive[call by reference]
Primitive datatypes are immutable and non-primitive datatypes are mutable. 
Primitive datatypes are number, string, boolean, null, undefined, symbol and bigint. 
Non-primitive datatypes are object, array and function. 
*/
/* Primitives are immutable, meaning their values cannot be changed. Non-primitives are mutable, meaning their values can be changed.
Primitives are compared by value, while non-primitives are compared by reference. 
Primitives are stored in the stack, while non-primitives are stored in the heap.
Primitives are faster to access and manipulate, while non-primitives are slower to access and manipulate. 
Primitives are passed by value, while non-primitives are passed by reference.

7types of primitive datatypes in js are number, string, boolean, null, undefined, symbol and bigint.
Non-primitive datatypes are object, array and function. 
*/
// ques------ Is it staticly typed or dynamically typed 

console.log("Symbol declaration")
const ID=Symbol("123");
const ID2=Symbol("123");
console.log(ID==ID2); //false because symbol is unique and cannot be compared with another symbol even if they have the same value. 
console.log(ID===ID2); //false because symbol is unique and cannot be compared with another symbol even if they have the same value. 
console.log(typeof ID); //symbol
console.log(typeof ID2); //symbol


//Array 
const heros=["shaktiman",'Nagraj',"doga"];
console.log(heros);

//Objects
let myObj={
    name:"Rudra",
    age:19,
    isLoggedIn:true
}
console.log(myObj);
console.log(typeof myObj);


//Function Declaration
const myFunc=function(){
    console.log("Radhe Radhe");
}
myFunc();
console.log(typeof myFunc);

//****************************Interview Question *************************/
console.log(typeof null); //object
console.log(typeof object); //object
console.log(typeof undefined); //undefined
console.log(typeof boolean); //boolean
console.log(typeof String); //String

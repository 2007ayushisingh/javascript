const course={
    coursename:"javascript",
    price:999,
    courseTeacher:"Hitesh Chaudhary",
}
console.log(course.courseTeacher);
// Explanation:
// - This file shows object creation, property access, and destructuring.
// - course.courseTeacher accesses the courseTeacher property directly.
// - Destructuring lets you extract properties into variables:
//     const {courseTeacher:T} = course
//   creates a new variable T containing course.courseTeacher.
// - You can also rename and extract other properties similarly.
// - The navbar example shows function-parameter destructuring:
//     const navbar = ({ company } = {}) => { ... }
//   which extracts company from the passed object; the = {} provides a default
//   so calling navbar() won't throw an error.
// - JSON is a text format for data interchange. In JSON keys and string
//   values must use double quotes. JS objects look similar but don't require
//   quoted keys.
/********************Alternate Syntax ***********************/
const {courseTeacher:T}=course             // Now we can access it using just "T" instead writing again and again "courseTeacher"
console.log(T);
const {coursename:C}=course             // Now we can access it using just "C" instead writing again and again "coursename"
console.log(C);

/******************  IN REACT ***********************/
// there is a method........
// Example React-style function that destructures props
const navbar = ({ company } = {}) => {
    console.log(company);
};
// call with an object containing company
navbar({ company: "Rajawat Industries" });
 
//################################### API #############################################
// in JavaScript -> JSON
// Valid JSON syntax (keys and string values use colons):
 {
  name= "Radhe",
  courseName= "RadheNaam"
}
// In JS objects you can also write:
// const obj = { name: "Radhe", courseName: "RadheNaam" };
// In js API's sometimes object format nd sometimes Array format
// like this [{}, {},......]  
//Random User generator    tool-> json formatter and then study

/*************************** FUNCTIONS AND PARAMETERS **********************************/
/* Syntax--  function fun_name(_){
code body;
}             // FUNCTION DEFINITION
fun_name();    */           // FUNCTION CALLING

//example  --> Sum of Two Numbers
function addtwoNumbers(num1, num2){   // nujm1 and num2 are parameters
  let sum = num1+num2;
  console.log(`sum of ${num1} and ${num2} is ${sum}.`)
 return sum;
} 
addtwoNumbers(34,250);   // 34 and 250 are arguments .
//console.log(sum);   //ReferenceError: sum is not defined;  beccause sum cant be accessed out of scope

function add(no1, no2){
    console.log (no1+no2);
}
const result=add(97+250);  //347
console.log(result);          // undefined cuzz doesn't return  347

//########################### POINTS TO KEEP IN MIND ###########################
// 1-> no statement will execute after return statement

// METHODS TO INPUT PARAMETERS.................
function loginUser(userName){
return (`${userName} logged in.`)
}
//(loginUser("Rudra "))  //ReferenceError: Rudra is not defined
console.log(loginUser("Rudra "));  // Rudra logged in.   // correct way to call function

//interview question-> what is the difference between parameters and arguments?
// Answer-> Parameters are variables defined in the function definition, while arguments are the actual values passed to the function when it is called.

// interview qstn  -> what is the difference between return and console.log()?
// Answer-> return is used to send a value back from a function to the caller, allowing it to be used later, while console.log() is used to print information to the console for debugging or informational purposes, and does not affect the flow of the program.

// inetview qstn -> what is the difference between function declaration and function expression?
// Answer-> Function declaration defines a named function and is hoisted, meaning it can be called before its definition in the code. Function expression defines a function as part of an expression (often assigned to a variable) and is not hoisted, so it cannot be called before its definition.

//qstn-> if we dont pass any value to the parameter then what will happen?
// Answer-> If a parameter is not provided a value when the function is called, it will be undefined by default. You can also set default values for parameters in the function definition to avoid undefined values.
/* example 
function greetUser(userName = "Guest") {
    console.log(`Hello, ${userName}!`);
}
greetUser(); // Output: Hello, Guest!
greetUser("Alice"); // Output: Hello, Alice!   */

//To  avoid this we can  use if-else statement to check if the parameter is undefined and provide a default value or handle the case accordingly.
function greetUser(userName) {
    if (userName === undefined) {
        console.log("enter uername");
    return ; 
    }
    return (`Hello, ${userName}!`);
    }
   console.log(greetUser()); // Output: enter username
   console.log(greetUser("Alice")); // Output: Hello, Alice!
   //ways to handle default values in function parameters:
   // 1. Default Parameters: You can assign default values to parameters in the function definition.
   // 2. Conditional Checks: Use if-else statements to check for undefined parameters and provide default values.
   // 3. Logical OR Operator: Use the logical OR operator (||) to assign a default value if the parameter is falsy (undefined, null, etc.).
   // 4. Destructuring with Defaults: When destructuring objects or arrays, you can provide default values for missing properties or elements.
   /*ways to write a professional code 
   function loginuser(Username){
    if(!Username)
    {
        console.log("Radhe Radhe , logged in");
    }
    
   }
   console.log(loginuser());  // Radhe Radhe , logged in
   console.log(loginuser("Rudra"));  // undefined  cuzz no return statement  */

   // to avoid this we can use return statement in if block also
   function loginuser(Username){
    if(!Username)
    {
        return ("Radhe Radhe , logged in");
    }
    return (`${Username} logged in`);
   }
   console.log(loginuser());  // Radhe Radhe , logged in
   console.log(loginuser("Rudra"));  // Rudra logged in

   //rest operator-> (...) allows a function to accept an indefinite number of arguments as an array, providing flexibility in handling varying numbers of inputs.
   function calculateCart(...numbers) {
    return numbers;
  }
  console.log(calculateCart(10, 20, 30)); // Output: [10, 20, 30]
  //spred operator-> (...) allows an iterable (like an array) to be expanded into individual elements, enabling easy passing of multiple values to functions or combining arrays.
  const nums = [1, 2, 3, 4];
  console.log(calculateCart(...nums)); // Output: [1, 2, 3, 4]

  // interiew question-> what is the difference between rest and spread operator?
  // Answer-> The rest operator collects multiple elements into a single array, while the spread operator expands an array or iterable into individual elements. Rest is used in function parameters, while spread is used in function calls or array literals.
   
  //interview question
  function calculateCart(val1, val2,...numbers) {
    return numbers;
  }
  console.log(calculateCart(10, 20, 30, 40, 50)); // Output: [30, 40, 50]
 // console.log(calculateCart(val1)); // Output: ReferenceError: val1 is not defined
  console.log(calculateCart(10)); // Output: []  (val1=10, val2=undefined, numbers=[])

  // how to pass an object to a function
  const user={
   // username="Ayushi",SyntaxError: Invalid shorthand property initializer
   username:"Ayushi",
    price: 199,
  }
  function displayUserInfo(anyObject) {
//console.log(`username is${anyObject.username} and price is ${anyObject.price}`);  //TypeError: Cannot read properties of undefined (reading 'username')
console.log(anyObject.username);
console.log(anyObject.price);
}
displayUserInfo(user);  // here anyobject is paraeter and user is argument.  // username is Ayushi and price is 199

// If you dont want to create object seprately then you can directly pass the object in function calling like this
displayUserInfo({username:"Vaibhav", price: 199});  // username is Vaibhav and price is 199

//pass an array to a function
const myArray= [200,400,600, 800]
function displayArrayInfo(anyArray) {
    console.log(anyArray[0]);
    console.log(anyArray[1]);
    console.log(anyArray[2]);
    console.log(anyArray[3]);
}
displayArrayInfo(myArray);  // 200 400 600 800

// If you dont want to create array seprately then you can directly pass the array in function calling like this
displayArrayInfo([100,300,500,700]);  // 100 300 500 700
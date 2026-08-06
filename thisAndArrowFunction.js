const user = {
    userName: "Rudra",
    welcomeMessage: function () {
        console.log(`i warmly welcome uh..... ${this.userName}`);
        console.log(this)
    }
}
//console.log(welcomeMessage());  //ReferenceError: welcomeMessage is not defined
console.log(user.welcomeMessage()); //this will return the welcome message with the userName property
console.log(user.userName);

/* interview question: what is the difference between normal function and arrow function in terms of this keyword?
  note: arrow function does not have its own this keyword, it inherits this from the parent scope. Normal function has its own this keyword which refers to the object that called the function.*/


/*  note*******************
in browser console, this keyword refers to the window object. In node.js, this keyword refers to the global object. In strict mode, this keyword is undefined in normal function and arrow function. In non-strict mode, this keyword is the global object in normal function and arrow function. */


function chai() {
    let userName = "Rudra";
    console.log(this); //this will return the global object in non-strict mode and undefined in strict mode
    /*             <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]  
  and many more properties and methods of the global object in node.js             */

    console.log(this.userName);  // undefined beacuse it works for obect but not for functions. // {}
chai();
}
//******************ARROW FUNCTION**********************
// Remote function keyword and , place => after parathesis and before the function body. Arrow function does not have its own this keyword, it inherits this from the parent scope. Normal function has its own this keyword which refers to the object that called the function.

const chaiArrow = () => {
    let userName = "Rudra";
    console.log(this); //this will return the global object in non-strict mode and undefined in strict mode  //{}
    console.log(this.userName);  // undefined beacuse it works for obect but not for functions. 
}
chaiArrow();

// BASIC SYNTAX OF ARROW FUNCTION
()=>{
    //function body
}

// 1. Arrow function with no parameters
const greet = () => {
    console.log("Hello, World!");
};
greet(); // Output: Hello, World!

// 2. Arrow function with one parameter
const square = (x) => {
    return x * x;
};
console.log(square(5)); // Output: 25

// 3. Arrow function with multiple parameters
const add = (a, b) => {
    return a + b;
};
console.log(add(3, 4)); // Output: 7

// 4. Arrow function with implicit return (no curly braces)
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6

// 5. Arrow function returning an object
const createUser = (name, age) => ({ name: name, age: age });
console.log(createUser("Alice", 30)); // Output: { name: 'Alice', age: 30 }

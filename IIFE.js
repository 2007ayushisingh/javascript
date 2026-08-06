//Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// Syntax of IIFE
(function () {
    //function body
})(); // these paranthsis in the end are used to invoke the function immediately after its definition.

// Example of IIFE
(function () {
    let userName = "Rudra";
    console.log(userName); // Rudra
    console.log(`Database Connected Successfully!`); // Database Connected Successfully!
})();

// Example of IIFE with parameters
(function (name) {
    console.log(name); // Rudra
})("Rudra");

// Example of IIFE with return value
const result = (function (a, b) {
    return a + b;
})(5, 10);
console.log(result); // 15

// Example of IIFE with arrow function
(() => {
    console.log(`IIFE with Arrow Function`);
})();

//NAMED IIFE
(function code(){
    console.log(`Named IIFE`);
})() //  type error if you wont use semicolon after the function body because it will be treated as a function declaration and not an expression.
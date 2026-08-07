// HOW CODE EXECUTE IN JS
let val1=25; 
let val2=35;
function addTwo(num1, nujm2){
    let result= num1+num2;
    return result;
}
let sum=addTwo(10, 19);
let sum=addTwo(56, 76);

/* CODE EXECUTION PHASES
1.  GLOBAL EXECUTION CONTEXT CREATION PHASE
    - Creation of Global Object
    - Creation of 'this' keyword
    - Creation of 'outer environment'
    - Creation of 'memory heap'
    - Creation of 'call stack'

2.  GLOBAL EXECUTION CONTEXT EXECUTION PHASE
    - Code is executed line by line
    - Function declarations are stored in memory heap
    - Function calls are pushed to call stack

3.  FUNCTION EXECUTION CONTEXT CREATION PHASE
    - Creation of 'arguments' object
    - Creation of 'local variables'
    - Creation of 'outer environment'
    - Creation of 'memory heap'
    - Creation of 'call stack'

4.  FUNCTION EXECUTION CONTEXT EXECUTION PHASE
    - Code is executed line by line
    - Function calls are pushed to call stack

5.  FUNCTION EXECUTION CONTEXT DESTROY PHASE
    - Function execution context is popped from call stack
*/

// Memory Heap: Memory heap is a region in memory where objects, functions, and variables are stored. It is used for dynamic memory allocation and deallocation during the execution of a program.

// Call Stack: Call stack is a data structure that keeps track of the function calls in a program. It follows the Last In First Out (LIFO) principle, where the last function called is the first one to be executed and removed from the stack.

// Execution Context: Execution context is an abstract concept that represents the environment in which JavaScript code is executed. It contains information about the variables, functions, and the value of 'this' keyword that are accessible during the execution of a particular piece of code.

// Outer Environment: Outer environment refers to the scope chain that allows a function to access variables and functions defined in its parent scopes. It enables lexical scoping, where a function can access variables from its outer (enclosing) functions.

// Arguments Object: The arguments object is an array-like object that contains the values of the arguments passed to a function. It allows functions to access and manipulate the arguments passed to them, even if they are not explicitly defined in the function's parameter list.

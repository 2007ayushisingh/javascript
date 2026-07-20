/**************** An object is a collection of key/value pairs.**************/ 
// Access values
// Dot notation: person.name
// Bracket notation: person['age']
// Why use objects
// Store related data together
// Represent real-world things
// Use for configuration, records, dictionaries
//two ways to declare objects
//1-- Singleton          2-- Multiple instance
//object literals
const IsUser={
    name:"Ayushi",
    class:"BCA",
    roll_number:24116000097,
    email:"1234ayushisingh2007@gmail.com"
}
//Object.create()    //  TypeError: Object prototype may only be an Object or null: undefined
//Accesing object     (.  ->  using dot operator )
console.log(IsUser.name);//acces anything whithin obj
//console.log(IsUser.name());       /acces any function
console.log(IsUser["email"]);
// if declared like this then must access using brackets
const user2={
    "name":"Rudra  Pratap Singh",
    "Class":"BCA",
    "rollno":2411679000250,
    "Email":"123rudrapratrap2007@gmail.com"
}
console.log(IsUser.name);
console.log(user2.name);
// console.log(user2[name]);        ReferenceError: name is not defined
/********************* DECLARATION OF SYMBOL*****************/
const mySym = Symbol('id'); // optional description
console.log(typeof mySym); // "symbol"
console.log(mySym);
/*    Important points:

Symbol() creates a unique value every time.
You cannot use dot notation with symbol keys: user.mySym will not work.
If you want a globally shared symbol, use Symbol.for('key').
To list symbol keys on an object, use Object.getOwnPropertySymbols(obj).*/

 //Use it as an object key with bracket notation:
const user = {
  name: 'Ayushi',
  [mySym]: 42
};

console.log(user.name);      // Ayushi
console.log(user[mySym]);    // 42
////////////////////////QUESTION
// declaration
[my_sym]="sym";  //[ 's' ]
console.log([my_sym]);    //object 
//console.log(typeof[my_sym]);
//if you want to freeze an object then-----
Object.freeze(user2);
Object.freeze(IsUser);
user2.name="Vaibhav";
console.log(user2.name);     //no changes will make cuzz we already freezed the object-----Rudra Pratap Singh
IsUser.name="Prachi";
console.log(IsUser.name);  //no changes will make cuzz we already freezed the object-----Ayushi Singh
console.log(user2);
console.log(IsUser);

/****** In js functions are treated as variables, no discimination*******/
user2.greetings=function(){
    console.log(`hey ${user2.name} , How are you my pookie?`);
};
console.log(user2.greetings);  //********************anonymous function    output--undefined*********************************************
user2.greetings(); 

// IsUser.Greetings=function()
// {
//     console.log(`i am great and miusiing you so much. ypurs ${IsUser.name}`);
// };
// IsUser.Greeting();
// user2.greetings=function()   // function calling
// {
//     console.log(`hey ${user2} , How are you my pookie?`);
// };
// user2.greetings();
// ...existing code...


// // define methods BEFORE freezing objects
// user2.greetings = function() {
//     console.log(`hey ${user2.name}, How are you my pookie?`);
// };
// console.log(user2.greetings); // function object
// user2.greetings();            // invoke

// IsUser.greetings = function() {
//     console.log(`i am great and missing you so much. yours ${IsUser.name}`);
// };
// IsUser.greetings();

// // demonstrate reassignment (works because not frozen yet)
// user2.greetings = function() {
//     console.log(`hey ${user2.name} again!`);
// };
// user2.greetings();

// // now freeze if desired
// Object.freeze(user2);
// Object.freeze(IsUser);

// // attempts to mutate after freeze will not change the objects
// user2.name = "Vaibhav";
// IsUser.name = "Prachi";
// console.log(user2.name); // original value
// console.log(IsUser.name); // original value

// console.log(user2);
// console.log(IsUser);

// // ...existing code...
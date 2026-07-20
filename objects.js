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

// /****** In js functions are treated as variables, no discimination*******/
// function greeting(){
//  console.log(`hey ${user2.name} , How are you my pookie?`);
// }
// console.log(user2.greetings);  //********************anonymous function    output--undefined*********************************************
// user2.greetings(); 

const newUser = new Object()  // singleton object    empty object
const User ={     //non singleton
 name:"Ayushi" ,
 isLoggedin:true,
};

//###################################  COMBINE OBJECTS  ##################################//
const obj1={1:"a", 2:"b"};
const obj2={3:"c", 4:"d"};
const obj3={obj1, obj2}        //wrong syntax ....because there will be object within object
const obj4 = Object.assign({}, obj1, obj2);   //correct syntax
console.log(obj4);
//console.log(...obj1, ...obj2);          //SPREAD OPERATOR TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))


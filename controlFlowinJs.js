// Control Flow in JavaScript
// Control flow refers to the order in which the code is executed in a program. It determines how the program's statements are executed based on conditions, loops, and function calls. In JavaScript, control flow can be managed using various constructs such as if-else statements, switch statements, loops (for, while, do-while), and function calls.
isLoggedIn= true;
if(isLoggedIn==true){
    console.log("I am not feeling good and energetic.")
}

// Condtonl operaters
//<,>,!, !=,==,<=,>=, ===(strict check)
if (temperature=> 41){
    console.log("it's too hot to go outside")
}else{
    console.log("less than 40");
}
// shorthand Notation
let  balance = 1000
if (balance>500) console.log("you can withdraw money.")   // this is called Implicit scope . But it works only for single line.
//*********************************OR************************************
if(balance>700) console.log("can withdraw money.");
console.log("If you have less than 500 then you can't withdraw .")

// Nesting
console.log(`your current balance is ${balance}`);
  if(balance<300){
    console.log("tou can't withdraw money.");  
 }
 else if (balance>300){
    console.log(`how much money do you wabt to withdraw or submit.`);
 }
 else{
    console.log("thanks for visiting us.")
 }

 // Example (real life)
 const userLoggedIn= true 
 const debitCard= false
 if(userLoggedIn && debitCard){
    console.log("Allow to buy");
 } else{
    console.log(`please login and check your credit card details.`)
    console.log(" Thank you.");
 }
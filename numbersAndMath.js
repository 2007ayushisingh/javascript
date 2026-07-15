const score=100;
const balance=new Number(94);//Strictly deefined ----must be a number
console.log(score);
console.log(balance);
console.log(balance.toString()); //this will return the string representation of the number object
console.log(typeof score); //this will return "number"
console.log(typeof balance); //this will return "object"
//fixed the value of the number to 2 decimal places
const marks=99.0345;
console.log(marks.toFixed(2)); //this will return "99.03"
//to get the value of the number object
console.log(balance.valueOf()); //this will return 94
const num1=93.354545;
console.log(num1.toPrecision(4)); //this will return "93.35" with 4 significant digits
console.log(num1.toExponential(2)); //this will return "9.34e+1" with 2 digits after the decimal point
console.log(num1.toLocaleString("en-US", {style: "currency", currency: "USD"})); //this will return "$93.35" in US currency format
const arr=[2,5,7,9];
console.log(Math.min(...arr)); //this will return the minimum value in the array
console.log(Math.max(...arr)); //this will return the maximum value in the array
console.log(Math.abs(-5)); //this will return the absolute value of -5-------(+ve value)
console.log(Math.round(-5.56234643));//this will return the rounded value of -5.56234643 
console.log(Math.ceil(-5.56234643)); //this will return the ceiling value of -5.56234643(top value)
console.log(Math.floor(-5.56234643)); //this will return the floor value of -5.56234643(bottom value)
console.log(Math.sqrt(39)); //this will return the square root of 39
console.log(Math.pow(2, 3)); //this will return the value of 2 raised to the power of 3
console.log(Math.random()); //this will return a random number between 0 and 1
console.log(Math.random()*100); //this will return a random number between 0 and 100

/**************************** FORMULA TO GENERATE NUMBERS FOR GAMES********************** */
/********* Math.floor(Math.random() * (max - min + 1)) + min ******** */
//example
const min=1;
const max=6;
const randomNumber=Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber); //this will return a random number between 1 and 6
//Bagginnng the date and time functions into a single module for easy access and management.
//Begginning of Jan1 1970 00:00:00 UTC
//API - Temporal functions for date and time manipulation
//existing Method
let myDate= new Date();
console.log(myDate);
console.log(typeof myDate); //this will return "object"
console.log(myDate.toString()); //this will return the string representation of the date object
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
//Months are zero based in JavaScript, so January is 0 and December is 11.
let myCreatedDate1=new Date(2029,11,17)
console.log(`i'll become Millionaire in ${myCreatedDate1.toDateString()}`);
let myCreatedDate2=new Date(2027, 4,13, 7,34,0);
console.log(`i'll get jobin ${myCreatedDate2.toString()}`);
//************** when we give date in YY-MM-DD format then months starts from 1 *************/
const date=new Date("2027-05-13");
console.log(date.toString());


//####################TIMESTAMPS########################
/*1   You can interact with the timestamp value directly using the getTime() and setTime() methods.
2   The valueOf() and [Symbol.toPrimitive]() (when passed "number") methods — which are automatically called in number coercion — return the timestamp, causing Date objects to behave like their timestamps when used in number contexts.
3   All static methods (Date.now(), Date.parse(), and Date.UTC()) return timestamps instead of Date objects.
4    The Date() constructor can be called with a timestamp as the only argument.
*/
const timestamp = Date.now();
console.log(timestamp);
console.log(Math.floor(timestamp));
//Day start from Monday

//methods
let mydate= new Date()
console.log(mydate.getDate());
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getHours());
console.log(mydate.getMilliseconds());
console.log(mydate.getMonth());
console.log(mydate.getSeconds());
////////shortcut-----ctrl+space ----gives properties in vs 


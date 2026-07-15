const name = "Ayushi Singh";
const age = 18;
console.log(`Name: ${name}, and my Age is ${age}`); //Name: ${name}, and my Age is ${age}  //this is a template literal
/********~~ works as fstring works in python**** */
// strings declaration
const gameName= new String ("Radhe Shyam"); //this is a string object
console.log(gameName); //this will return the string object
//String Methods
console.log(gameName.length);
console.log(gameName[0]); //this will return the first character of the string
console.log(gameName.toUpperCase());
console.log(gameName.endsWith("yam")); //this will return true if the string ends with "yam" else false
/***these works as key value pairs, here index are keys . */
console.log(gameName.indexOf("Shyam")); //this will return the index of the first occurrence of "Shyam" in the string
//For Slicing
console.log(gameName.slice(0, 5)); //this will return the substring from index 0 to 4
console.log(gameName.slice(-5, -1)); //this will return the substring from index -5 to -2
//to delete the white spaces from the string
const str = "   Hello World!   ";
console.log(str.trim()); //this will return "Hello World!" without the white spaces
//Replace
console.log(gameName.replace("Shyam", "Krishna")); //this will return the string with "Shyam" replaced with "Krishna"
const string="1234ayushi%20@gmail.com";
console.log(string.replace("%20", "singh")); //this will return the string with "%20" replaced with "singh"
//console.log(gameName.prototype.toString()); //this will return the string representation of the string object
console.log(gameName.prototype);
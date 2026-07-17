const marvel_heros =["thor","Ironman","Spiderman"]
console.log(marvel_heros);
const dc_heros =["Superman","Flask","Batman"]
console.log(marvel_heros);
marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);
//***************************** METHODS**************************/
heros=["Kalam","Netaji"]
ind_heros=["Bhagat Singh","Aazad"]
console.log(ind_heros.concat(heros));      //gives output in a new array
/*********************************** SPREAD OPERATORS*********************************/
const new_heros=[...marvel_heros,...dc_heros] //The spread operator is ... and it expands iterable values like arrays or objects into individual elements.
console.log(new_heros);
/*******************************************What it does
For arrays: it spreads elements
For objects: it copies properties
It is not a function, just syntax for expansion******************/

const an_array=[1,2,3,[3,4,5],[4,5,6][7,8],9]
const real_array= an_array.flat(Infinity);             /*Array.prototype.flat() is used to flatten nested arrays into a single-level array.
// returns a new array with all sub-array element concatenated into it recursively upto the special depth//
When it helps
You have arrays inside arrays:
[[1, 2], [3, 4]]
You want one combined array:
[1, 2, 3, 4]*/
console.log(real_array);
console.log(Array.isArray("an_array")); //output----  false cuzz its string not array
console.log(Array.isArray(an_array));       ////output---true( checks if an array or not)
console.log(Array.from("Ayushi_Rajawat"));   // convert to   array
/************************************** INTERVIEW QUESTION**********************************/
// Use Object.fromEntries for key/value pairs
// If you have an array of key/value pairs, use Object.fromEntries() to turn it into an object.
const pairs = [
  ['name', 'Alice'],
  ['age', 30],
  ['city', 'Paris']
];

const obj = Object.fromEntries(pairs);

console.log(obj);
// { name: 'Alice', age: 30, city: 'Paris' }
//Object.fromEntries() takes an array like [['key', value], ...] and outputs an object
console.log(Array.from('name:"radha'));
//console.log(Array.from('name':"radha")); //INVALID STRING ERROR 

/************************* Counting Variables to array***********************/
let collegue1="Rudra";
let collegue2="Ayushii"
let collegue3="Vaibhav"
let collegue4="Jaya"
console.log(Array.of(collegue1,collegue2,collegue3,collegue4));     //Returns new array from the set of elements

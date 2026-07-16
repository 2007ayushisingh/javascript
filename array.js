/*//crossOriginIsolated---->window not for js
[]--brackets
()---paranthesis
{}---curly braces*/
//Array----Collection of multiples element in an array
/*Rulees--------> 
1 ----could be multiple datatypes
2----- in js arrays are resizable
3-----not associative array["one"]-->wrong     ["1"] --->correct*/
//Shallow Copy---
//Deep Copy ---- properties don't share, same  reference  
const array=["Radhe", 25, "Ayushi", "Rudra","Shyam"]
console.log(array);
console.log(array[4]);
//METHODS
const myHeros=["Shaktiman","Nagraj", "Batman"]
console.log(myHeros);
myHeros.push("Spiderman");   // insert element
console.log(myHeros);
const indHeros=["Bhagat singh", "Aajad","A.p.J Kalam"]
console.log(indHeros)
console.log(myHeros+indHeros);
let heros= myHeros+ indHeros;
console.log(heros);
//console.log(myHeros.push(indHeros));
//Interview questions----# Arays makes shallow copy
//-----#Shallow Copy--> copy whose property share the same reference point.
//-----#Deep Copy-->properties don't share same reference
 /*****************Methods*****************/
 const array2=[1,2,3,4,5,6]
 console.log(array2.push(7));  //Insertion)
 console.log(array2.pop());         //remove last element of array2
 console.log(array2.unshift(0));         //add element in first index
 console.log(array2.shift());                //remove first element
 console.log(array2.includes(9));             //check whether inslude that element
 console.log(array2.indexOf(5));                    //check index of zny element 
 console.log(array2.indexOf(10));                    //if doesnt exist that element then it'll return -1

const newHeros  = heros.join    //add all the element of an array like string (change datatypes to String)
console.log(newHeros);

// Difference between slice and splice
console.log("slice ---> Range not includes ; and Splice includes Range."); 
const arr =['a','b','c']

// diff between For-in and For-of
/* for in m keval keys print hongi 
for-of   m  key and value both 
*/
// INTERVIEW ------------  MAP IS NOT ITERABLE SO WE CAN'T USE FOR-IN.......................
// For In loop for Objrct iteration
const myObj= {
    "js" : "javascript",
    "py" :"python",
    "cpp" : "c++",
    "rb" : "rubi"
}
for (const key in myObj){
    console.log(key);   // js ,py ,cpp, rb
   console.log(myObj[key]);   // javascript , python, c++ , rubi
}

// For Array.....
const programming = ["javascript", "python", "rubi" ,"swift" ]
for( const key in programming){
    console.log(key);
    console.log(programming[key]);

}

//*****************************  FOR - EACH LOOP  **********************************/
//(by default for an array)
/* SYNTAX ----------- 
array_name.foreach(function_name{item})  // call back fuction
*/
// A callback function is a function that is passed as an argument to another function, and is executed after some operation has been completed.

const coding = ["js", "python", "c++"];

coding.forEach(function(item) {
  console.log(item);
});

// Or with arrow function:
coding.forEach((item) => {
  console.log(item);
});

// ***********VERY VERY VERY IMPORTANT FOR PROJECTS************
 // OBJECT WITHIN ARRAY
 const  myCode = [{
    language :"javascript" ,
    fileName : "js" 
},
{
    language :"python",
    fileName : "py"
}]; 
myCode.forEach((item) => {
    console.log(item.language);
});

//---------------NOTE ----------------
// 1.    Always use comma between two objects
// 2.    for each ke bad l pura code ek parenthesis m wrap hoga
// 3.     

// ["", " ", ",",{} ]
// Array specific loops
/* for...in  => object ki keys
for...of  => Array/Map/Set ki values k liye*/
 
//1.   For of 
/* SYNTAX 
for (const iterator of object){   // used for array of objects
// body 
}*/
// examples
const myArray= [1,"sita", 2, "Ram"]
for ( const num of myArray){
    console.log(num);
}
// for string array
//const greeting= ["Radhe Radhe", "Sita Ram", "Gauri Sankar"]
const greeting= "Radhe Radhe"
for(const greet of greeting){
    console.log(greet);
    // to avoid space bet Radhe Radhe yopu can use continue keyword with a condition
    // if(greet==" "){
    //     continue;
    // }
}

// 2. Mpas in js (objects that holds key-value pairs , there are ordered)
const country= new Map();
country.set("In", "India");
country.set("Uk", "United Kingdom");
country.set("Us", "United States");
country.set("Pak", "Pakistan")
console.log(country);
for (const key in country){     // gives whole key -value array as output because here  is merely a word
    // you can =>  for (const ele in country){
    console.log(key);
}
for (const [key] of country){     // gives  key of array as output 
    console.log([key]);
}
//for (const [key], [values] of country){     // gives  key of array as output //SyntaxError: Missing initializer in destructuring declaration
for (const [key, value] of country){    
    console.log([key] ,":",  [value]);
}
// for object 
const myObj = {
    "gam1": "NFS",
    "gam2": "PUBG "
} 
for(const [i, value] of myObj){
    console.log(i, "=>", [value]);
}// error =>............... myObj is nnot iterable
 
 

 // syntax 

 /*   initialisation
 while(condition){
 // 
 }

 do {
    // code that runs at least once
} while (condition);
 */ 

let i=1;
while(i<=5){
    console.log(i);
    i=i+2;
}
// using loop in array 
 const array=["Batman", "Spiderman","Flash"];
 let index=0;
 while(index < array.length){
    // console.log(`value is  ${array[i]}`);   // value is  undefined
    console.log(`value is  ${array[index]}`);
index =index +1;
 }

 // Do- while
 // always runs once then checks the condition 

 let j= 3;
 do {
    console.log("Radhe Radhe")
 }
    while(j<2);
 
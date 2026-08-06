{
    let  a=5;
    let b=7;
    console.log(a+b);
}
 //console.log(a); // This would cause an error because 'a' is not defined in this scope
 // let and const support block scoping, meaning that variables declared with let or const are only accessible within the block they are defined in. but var is sometimes accesible outside of the block it is defined in, which can lead to unexpected behavior.
 let a=4;
 let b=8;
 if(true){
    console.log(a);
 }
 else{
    var c=10;
 }
console.log(c); // This would cause an error because 'c' is not defined in this scope
// interview question-> What is the difference between let, const, and var in terms of scoping?
// browser console-> var is function scoped, let and const are block scoped. var can be redeclared and updated, let can be updated but not redeclared, const cannot be updated or redeclared.

// browser and code window m global scope diff hote h .

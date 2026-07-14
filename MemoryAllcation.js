/*primitive data types are stored in stack memory *//*****change in copy of primitive data type will not affect the original value but in case of non-primitive data type change in copy will affect the original value because they are stored in heap memory and they are passed by reference. */
/*non-primitive data types are stored in heap memory *//****makes changes in original value when copy is modified */
let myYoutubeName="music@Melody";

console.log(myYoutubeName);
console.log("Radhe Radhe");
const myYoutubeName2=myYoutubeName;
console.log(myYoutubeName2);
/*myYoutubeName2="best_Editz...";
console.log(myYoutubeName2); //TypeError: Assignment to constant variable.*/
const boy={
    name:"Rudra",
    address:"Maswanpur, Rawatpur,Kanpur"
};
boy.name="Rudra Pratap Singh";
console.log(boy.name); //Rudra Pratap Singh
/******here we are making changes in the original object, not in reference variable And the const keyword is for the reference, not the value************************/
const girl={
    name:"Ayushi",
    address:"Malauna, Bihar, Unnao",
};
girl.name="Ayushi Singh";
console.log(girl.name); //Ayushi Singh
/****we cant make change in primitive datatypes while using const keyword */
const myName="Radhe";
 //myName="Radhe Radhe"; //TypeError: Assignment to constant variable.
console.log(myName); //Radhe



let user={
    name:"Radhe",
    age:25,
    address:"Unnao, Uttar Pradesh",
    email:"radhe@example.com"
};
let user2=user; //user2 is a reference variable to user object
console.log(user2.email); //radhe@example.com
/*******if we change it the value of the original object will also change */
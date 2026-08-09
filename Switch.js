// switch Syntax
/* switch(key){
case value:
    // statement
    break;
    default :
break;
}
*/
 
// write a code to wish birthday on their birthday
const readline = require("readline"); // readline is used to take user input in nodejs in javascript ************
const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout, 
});
rl.question("Enter your birthday month: ", (month) => {
     month=month.trim().toLowerCase();
    console.log("hey it's " + month);
    switch(month){
         case "january":
            console.log("It' my Mom's  birthday.  wish you the Happiest Birthay Mumma.")
            break;
         case "february":
            console.log("It's Vaibhav's birthday.  wish you the Happiest Birthay Vaibhav.")
            break;
         case "march":           // agr whitespace m bhi similarity nhi h to default execute higa qki whitespace bhi count hota h 
            console.log("It's my parents anniversery.  wishing you the Happiest wedding Anniversery Mumma n Papaji. ")
            break;
         case "april":
            console.log("It's Rudra's birthday.  wish you the Happiest Birthay Rudra.")
            break;
         case "august":
            console.log("It's my brother's birthday.  wishing you the Happiest Birthday Bhai. .")
             console.log("It's  Jaya's birthday.  wishing you the Happiest Birthday jaya. .")
            break;
         case "october":
            console.log("It's  Akanksha's birthday.  wishing you the Happiest Birthday Akku. .")
            break;
         case "november":
            console.log("It's my birthday.  wishing me the Happiest Birthday . LOVE UH........ .")
           console.log("It's my baba's birthday.  wishing you  the Happiest Birthday Shyam baba ji.... . LOVE UH BABA ........ .")
            break;
         case "december":
            console.log("It's Anu's birthday.  wishing you the Happiest Birthday . LOVE UH........ .")
            console.log("It's Prachi's birthday.  wishing you  the Happiest Birthday Prachi.")
            console.log("It's Shaurya's birthday.  wishing you  the Happiest Birthday Shaurya.")
            break;
         default:
                console.log(" Enter the correct month....");
                break;
    }
    rl.close();
});

// INTERVIEW QUESTION....
/* IF WE WON'T USE BREAK STATEMENT THEN IT WILL WHOLE CASES AFTER THE TRUE CASE SO WE USE BREAK.*/

//const userEmail= "123sfyxrhgj@gmail.com";
const userEmail= 0
if(userEmail){     // means if useremail exist
    console.log("Thank you!")
    console.log(" we got your Email.");
} else{
    console.log("sorry.....")
 console.log("didn't  get the email.")
}
/*   TRUTHY AND FALSY VALUES
FALSY VALUES=>  (TREATED AS FALSE)  => false, 0, BigInt (O)n  , null , undefined;
TRUTHY VALUS => (TREATED AS TRUE) => true, [], "0", " "( there is space inbetween two quots),{},function() ,""
*/

// interview

UserEmail=[]
if(UserEmail.length===0){
    console.log("Empty mail.")
}else{
    console.log("duygktjuhtjtgujyhjyhy")
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Empty .")
}

 // INTERVIEW QUESTIONS
    /***************
      false ==0                   //true
      false=""             //true 
??   => nullish coalishind operator            ( for nul;l and undefined)     */
 
// example   
let val1=10;
// val1 = null ?? 10
 val1 = 26 ?? 18 
  val1 = null ?? 14 ??35
console.log(val1);  
// Special cases
 val2= undefined?? 32;
 console.log(val2);

 //ternary operator
 // condition ? true:false    (workls as if-else)
 //example
 const TeaPrice=1000
 TeaPrice>500? console.log("tea price is above 500"): console.log("tea price is above 500");


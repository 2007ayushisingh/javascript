//    forEach = "Do something" with each item
//    filter = "Get only" items that match condition
// It is used to check what returns for each
const myBooks= [{
    bookName : "Gunahon ka devta",
    author : "Dharmveer bharti",
    genre : "fiction",
},
{
    bookName : "October junction",
    author : "Divya praakash dubey",
    genre : "fiction",
},
{
  bookName : "Godan",
    author : "Munshi premchand" ,
    genre : "fiction"
}, 
{
  bookName : "Vaishali ki nagarvadhu",
    author : "Aacharya chatursen shastri"  ,
    genre : "fiction",
},
{
  bookName : "Dopamine detox",
    author : "Thibaut meurisse"  ,
    genre : "non_fiction",
},
{
  bookName : "Atomic habits",
    author : "james clear"  ,
    genre : "non_fiction",
}
]

console.log("here we are printing USER BOOKS...")
let userBooks= myBooks.filter((userbooks)=>myBooks.genre=== "non_fiction")
console.log(userBooks);       //  output ------[] EXPLICIT
// 2 condition---------->( cond1 && cond 2)
console.log("here we are printing ALL BOOKS...")
myBooks.forEach((item) => {
    // console.log(item.bookName);
    //  console.log(item.author);
    console.log(item); 
    return item;               // undefined 
});
//console.log(values);

// USING FILTER  ----------- also we can write it like this..........
// syntex-----------  arrayname.filter((variable) => (condition))

/* Summary in Few Words:
Filter = Remove unwanted items from array based on condition
Returns new array (doesn't change original)
Syntax: array.filter((item) => item > value)
Works with numbers, strings, objects, etc.
*/
// note----------  object ki properties access krne k liye variable.propery likhenge
 console.log("here we are printing FAVOURITE BOOKS...")
// FILTER - Get books by specific author
const fav = myBooks.filter((book) => book.author === "Dharmveer bharti");
console.log(fav);   // OUTPUT---> EXPLICIT 

/*Why "EXPLICIT" here?
When you use filter(), it returns the actual filtered array that you can see. 

// IMPLICIT (hidden/unclear)
myBooks.forEach((book) => {
  return book;  // ❌ Returns undefined! forEach ignores returns
});

// EXPLICIT (clear/visible)
const fav = myBooks.filter((book) => book.author === "Dharmveer bharti");
console.log(fav);  // ✅ Shows the actual filtered array
*/

// MAP.......
 // ques--> add 10 to each element of array
 const array= [250, 97, 139, 1 ] 
 const newArr= array.map((num) => num+10)
 console.log(newArr);

 // chaining-------
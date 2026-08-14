/* array.reduce((accumulator , current value) => {
    return accumulator;
},  );
*/
/*      accumulator---> stores the accumulated results
current value ----> 
index ---> original array
initial value---> initial value of the accumulator
*/

// Example
let arr=[97, 250];
let sum =arr.reduce((acc, curr_val)=> acc+curr_val, 0);
console.log(sum);
// Tip=>   always provide 0 or 1 as initial value for sum and multiplication. it makes code sefer and avoids unexpected behsviour with emoty array
// for very first time intial value is accumulator
const myNum =[ 1,2,3,4]
const total= myNum.reduce(function(acc, curr){
    return acc+curr;
}, 0);
console.log(total);

// Real Life Example
const  shopping_cart=[{
    item_name: "js_course",
    price:399
},{
    item_name:"python",
    price:799,
},{
    item_name:"full_stack",
    price:999,
},{
    item_name: "dsa_course",
    price:499,
}]
const Total = shopping_cart.reduce((acc, item)=> 
{
    return item.price, 30
}, );
console.log(Total);
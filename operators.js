//*************************************+,_,*,?,%*********************** */
console.log("Operators in JavaScript");
console.log("1" + 2); //1 is a string so it will concatenate 2 to 1 and return 12
console.log(1 + "3" + 2); //1 is a number so it will convert "3" to a number and then concatenate 2 to it and return 132

//SYNTAX 
//ToPrimitive(input[],preferedType)  //input is the value to be converted to primitive type and preferedType is the type of value to be converted to primitive type
console.log(1 + true); //true is a boolean so it will convert true to 1 and then add 1 to it and return 2
console.log(1 + false); //false is a boolean so it will convert false to 0 and then add 1 to it and return 1
console.log(1 + null); //null is a null value so it will convert null to 0 and then add 1 to it and return 1
console.log(1 + undefined); //undefined is an undefined value so it will convert undefined to NaN and then add 1 to it and return NaN

//******************COMPARISON OPERATORS*********************/
//(less than, greater than, equals, not equals, less than or equal to, greater than or equal to)
console.log("3" > 2); // "3" is converted to the number 3, then compared to 2, returning true
console.log(null == undefined); //true because both are considered equal in non-strict comparison
console.log(null == 0);
console.log(null >= 0);
/*the reason null==undefined is true is because both are considered equal in non-strict comparison, but null==0 is false because null is not equal to 0. However, null>=0 is true because null is considered to be greater than or equal to 0 in non-strict comparison. This can be confusing, but it is important to understand how JavaScript handles type coercion and comparison operators.*/


/*the reason is that an equality check == and comparison check>= are different. The equality check == checks for equality of values, while the comparison check >= checks for the relationship between values. In this case, null is considered to be greater than or equal to 0 because it is not less than 0, but it is not equal to 0 either. This can be confusing, but it is important to understand how JavaScript handles type convercion and comparison operators.*/

//strict check===   including datatype
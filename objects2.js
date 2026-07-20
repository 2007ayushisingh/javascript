// when we fetch data from API
const user =[{id:1,
    email:"1234ayushisingh2007@gmail.com",
},
{id:2,
    email:"123shaurya2009@gmail.com",
}
]
user[1].email;   //accessing first user email
console.log(Object.keys(user));   // datatype ----array
console.log(Object.values(user));
console.log(user.length);
console.log(Object.entries(user));    // output---array within the array
// if value doesnot exist
console.log(user[0].hasOwnProperty("email"));
console.log(user[1].hasOwnProperty('name'));

// Enumerability means a property can be listed during object iteration
// such as with Object.keys(), Object.entries(), or a for...in loop.
// propertyIsEnumerable() checks whether the property belongs to the object
// and is enumerable, so it will appear in those enumerations.
console.log(user[0].propertyIsEnumerable("email"));
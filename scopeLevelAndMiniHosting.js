  // nesting of scopes is not supported in mini hosting, so we need to check if the current scope is a nested scope and if it is, we should return false.
  function one(){
    const username="Ayushi Rajawat";
    function two(){
        const feel="overwhelmed";
        console.log("Radhe Radhe");
        console.log(username);
    }
    two();
    //console.log(feel); //  reference error: This would cause an error because 'feel' is not defined in this scope
  }
  one();
  // child class can use the properties of parent class but parent class cannot use the properties of child class.
  // note-------  koi bhi code agr bech m wrong h to code execute nhi hoga qki line by line execute hota h.
  // note**********************  there is always a new diff call stack(scope) for each function call, so the variables defined in one function are not accessible in another function unless they are passed as arguments or returned as values.
  // interview qstn---->  what is closure in javascript?  closure is a function that has access to its own scope, the outer function's scope, and the global scope. it allows a function to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared.

  if(true){
    const username="Rudra Rathore";
    if(username==="Ayushi Rajawat"){
        console.log(`Radhe Radhe ${username}`);
        const fav_feel="peace";
    } 
  //  console.log(fav_feel); // reference error: This would cause an error because 'fav_feel' is not defined in this scope
    else{
        console.log(`Seeta Ram ${username}`);
        const fav_feel="happiness";
    }
   //  console.log(fav_feel); // reference error: This would cause an error because 'fav_feel' is not defined in this scope
  }

  //****************************** important*****************************
  function addOne(num){
    return (num+1);       //only declaration ,no output yet 
  }
  console.log(addOne(5)); // output: 6 
   const addtwo= function (num){
    return (num+2);
  }
  console.log(addtwo(5)); // output: 7

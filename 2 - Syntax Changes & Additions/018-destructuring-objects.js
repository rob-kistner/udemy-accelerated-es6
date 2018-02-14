/* -----------------------------------------
	DESTRUCTURING - OBJECTS
------------------------------------------*/

let obj = {
    name: 'Max',
    age: 27,
    greet() {
      console.log("this is a greeting!");
    }
  };
  
    // objects need curly braces
  let {name, greet} = obj;
  console.log(name);
  greet();
  
  
    /*-----------------------------------
    |  NOTE: Cannot skip values like
    |  you can with arrays
    -----------------------------------*/
  // let {name, ,greet} = obj // no good
  
  
    // can rename whatever you destructure
    //
  let {name: myname, greet: hello} = obj;
  console.log(name);
  hello();
  
  
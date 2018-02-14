/* -----------------------------------------
	HOISTING IN ES6
------------------------------------------*/

/*-----------------------------------
  |  This errors out, hoisting with
  |  let doesn't work like it does 
  |  with var:
-----------------------------------*/

// age = 27;
// let age;
// console.log(age);



function doSmth() {
  age2 = 30;
}

/*-----------------------------------
  |  This works, age2 is out of function
  |  scope, the function never knows about
  |  it
-----------------------------------*/

let age2;

doSmth();

console.log(age2);

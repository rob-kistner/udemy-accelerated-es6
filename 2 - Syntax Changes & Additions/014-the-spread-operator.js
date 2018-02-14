/* -----------------------------------------
	THE SPREAD OPERATOR
------------------------------------------*/

let numbers = [1,2,3,4,5];

console.log(Math.max(numbers)); // errors out
console.log(Math.max(...numbers)); // this works

// this will print out the numbers individually
// to show what's happening behind the scenes
//
// console.log(...numbers); 
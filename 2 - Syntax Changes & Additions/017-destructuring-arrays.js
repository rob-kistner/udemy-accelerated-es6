/* -----------------------------------------
	DESTRUCTURING - ARRAYS
------------------------------------------*/

let numbers = [1,2,3];

let [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);
console.log(numbers);

third = 10;


  // proof: original array intact, 
  // values were pulled as copies
console.log(third);


  // additional values are just undefined
let [a,b,c,d] = numbers;
console.log(d);


  // can assign a default value in destructure
let [e='default',f,g,h='default'] = numbers;
console.log(e, h);


  // rest param pulls all additional values
  // as an array
let [x, ...y] = numbers;
console.log(y);


  // swap variables
let var1 = 5;
let var2 = 10;

[var2, var1] = [var1, var2];
console.log(`var1 = ${var1}, var2 = ${var2}`);


  // can just pull out specific numbers
  // in the array
let skipnumbers = [1,2,3];

let [use1, ,use3] = skipnumbers;
console.log(use1, use3);
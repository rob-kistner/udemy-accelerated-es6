/* -----------------------------------------
	TEMPLATE LITERALS
------------------------------------------*/

let name = 'Max';

let description = `My name is ${name}`;

let descmulti = `
  Multiple lines from ${name + ' !!!'}
  Here's an escaped version: \${name}
`;

console.log(description);
console.log(descmulti);

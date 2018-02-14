/* -----------------------------------------
	FAT ARROW FUNCTIONS
------------------------------------------*/

var longfn = function(s) {
    return s;
}


// can leave off parens if you have one argument
const fn = s => s;

console.log(fn("Hello!!!"));


// need parens if you have 2 or more arguments
var fnAddExpanded = (a, b) => {
return a + b;
}

var fnAdd = (a, b) => a + b;

console.log(fnAdd(3, 8));


setTimeout(() => console.log('Hello timed'), 1000);


//   returns window object

function fn() {
console.log(this);
}

fn();

var fn2 = () => console.log(this);

fn2();
  
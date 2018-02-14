/* -----------------------------------------
OBJECT LITERAL EXPRESSIONS
------------------------------------------*/

// this is an "object literal"
let obj = {
    name: "max",
    age: 27
};

console.log(obj);


/*-----------------------------------
|  es6 will take variable values
|  from the surrounding variables if they
|  are not defined in the literal...
-----------------------------------*/

let name = 'Anna';
let age = 25;


let obj2 = {
    name,
    age,
    greet() {
        console.log(this.name + ', ' + this.age);
    },
        // this is valid and allows for whitespace
    "greet me"() {
        console.log("Second Greeting");
    }
};

console.log(obj2);
obj2.greet();
// needs to be called with array form since it's defined as a string
obj2["greet me"]();



// dynamic fields

let ageField = "age";

let obj3 = {
    name: 'Max',
    [ageField]: 28,
    greet() {
        console.log(this.name + ', ' + this.age);
    }
};

console.log(obj3);
obj3.greet();
console.log('ageField is: ' + obj.age);

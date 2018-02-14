
/* -----------------------------------------
	CLASS BASICS
------------------------------------------*/

class Person
{
    // initialize set class props
    // in the constructor
    //
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age}`);
  }
}


class Max extends Person
{
  constructor(age) {
      // super is necessary if the parent class 
      // has a constructor
    super('Max');
    this.age = age;
  }
  
  greet() {
    console.log('Hello!!!')
  }
  
  greetTwice() {
    this.greet();
      // using 'super' instead of 'this' will call
      // the original (non-overridden) method
    super.greet();
  }
}


let person = new Person('RobK');

person.greet();
console.log(person.__proto__ === Person.prototype);

let max = new Max(27);
max.greetTwice();
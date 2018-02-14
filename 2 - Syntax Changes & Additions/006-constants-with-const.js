/* -----------------------------------------
	CONST
------------------------------------------*/

const AGE = 27;

const AGES = [27, 29, 31];

/*-----------------------------------
  | Will add the array member since
  | we're not changing the definition of
  | the constant itself
-----------------------------------*/
AGES.push(25);

console.log(AGES);


const OBJ = {
  age: 27
};

console.log(OBJ);

/*-----------------------------------
  |  This also works to change
  |  the value of the age member 
  |  of OBJ since we're not re-initializing
  |  OBJ the constant
-----------------------------------*/
OBJ.age = 30;

console.log(OBJ);


// This wouldn't work:
//
// OBJ = "now I'm a string";
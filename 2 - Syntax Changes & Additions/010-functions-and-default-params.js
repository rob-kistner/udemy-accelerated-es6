/* -----------------------------------------
	FUNCTIONS & DEFAULT PARAMETERS
------------------------------------------*/

function isEqualTo( number = 10, compare = 10 ) {
    return number == compare;
  }
  
  // console.log(isEqualTo());
  
  
  
  function isEqualTo2( number = 10, compare ) {
    console.log(number);
    console.log(compare);
    return number == compare;
  }
  
  // returns false: 2 arguments in function and 
  // one passed argument means the function is 
  // trying to sub it in the first argument slot
  //
  console.log(isEqualTo2(10));
  
  /* -----------------------------------------
      Can pass a previous argument to a later argument, i.e.:
    
    isEqualTo2( number = 10, compare = number )
  ------------------------------------------*/
  
  
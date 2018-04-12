(function foo() {
  // Step 1.1: Create a variable 'a' using let keyword and try re-declaring it
    //   let x = 1;
    //   let x = 2;
  
  // Step 1.2: Declare another variable 'a' inside a block.
  if( true ) {
    let y = 10;
  }

  console.log( 'y = ', y );

  // Step 1.3 Log the value of 'a' both within and outside the block
  
}());
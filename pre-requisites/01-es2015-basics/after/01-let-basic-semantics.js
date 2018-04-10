(function foo() {
  let a = 1;

  // unlike var keyword, redeclaration of a variable declared using let results in an error
  // let a = 1.5;

  // declare another variable a inside the block
  {
    let a = 2;
    console.log( 'inside the block, a = ', a );
  }


  console.log( 'outside the block, a = ', a );
}());
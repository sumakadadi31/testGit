/**
 * Functions can now be defined usign a shorthand syntax - the arrow function syntax.
 * The semantics of an arrow function differs from that of a function defined using the old syntax.
 */

// Step 1.1: Define a function sum that calculates sum of 2 arguments passed to it and returns it

// old way
// let sum = function( a, b ) {
//     return a + b;
// };

let sum = ( a, b ) => {
    return a + b;
};

// in fact is there is only one statement in function body that returns a value, we can use a shorthand syntax like so
// Step 1.2: Define sum without braces for the function body (this is possible only if there is a single statement)
let sum2 = ( a, b ) => a + b;

sum( 1, 2 );
sum2( 3, 4 );


// if the return value is immaterial and there is just one statememt, you will often find this kind of uage (the return value of console.log() is not important)
// Step 2: Define a greet function that takes in name and greeting and logs the greeting message for the person with given name. Do not use the return keyword (essentially returning the return value of console.log() which is anyway inconsequential)
let greet = ( message, name ) => console.log( `${message} ${name}!` );
greet( 'Good morning', 'John' );

let square = n => n * n;
console.log( square( 12 ) );
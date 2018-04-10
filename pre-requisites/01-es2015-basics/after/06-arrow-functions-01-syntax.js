/**
 * Functions can now be defined usign a shorthand syntax - the arrow function syntax.
 * The semantics of an arrow function differs from that of a function defined using the old syntax.
 */

let sum = ( a, b ) => {
    return a + b;
};
console.log( `[longhand syntax] sum(1, 2) = ${sum( 1, 2 )}` );

// in fact is there is only one statement in function body that returns a value, we can use a shorthand syntax like so
sum = ( a, b ) => a + b;
console.log( `[shorthand syntax] sum(1, 2) = ${sum( 1, 2 )}` );

// if the return value is immaterial and there is just one statememt, you will often find this kind of uage (the return value of console.log() is not important)
let greet = ( name, greeting ) => console.log( `Hello ${name}, ${greeting}!` );
greet( 'John', 'Good morning' );
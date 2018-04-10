/**
 * Default parameters
 */

// Step 1: Provide a default value of 1 to step
function incr( a, step ) {
    return a + step;
}

// Step 2: Check out what the following log
console.log( incr( 10, 2 ) );
console.log( incr( 10 ) );
console.log( incr( 10, undefined ) );

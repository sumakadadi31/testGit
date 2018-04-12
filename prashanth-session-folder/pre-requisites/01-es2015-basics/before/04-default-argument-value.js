/**
 * Default parameters
 */

// Step 1: Provide a default value of 1 to step
function incr( a = 20, step = 1, x ) {
    // old JS
    // if( step === undefined ) {
    //     step = 1;
    // }
    // or..
    // step = step || 1;

    return a + step + x;
}

// Step 2: Check out what the following log
console.log( incr( 10, 2 ) );
console.log( incr( 10, undefined, 100 ) );
console.log( incr( 10, undefined ) );
console.log( incr( undefined, 5 ) );

/*
 * Type assertions are similar to type-casting in other languages.
 * Unlike type casting, no data format conversions are done
 * Like type casting, they are a way to indicate to the compiler that you as the developer are very well aware of what you are doing by treating a variable as a different data type
 * 
 * There are 2 syntaxes for asserting type
 */

(function() {
    let quote1: any = 'Always remember that you are absolutely unique. Just like everyone else.';

    // Syntax 1: <type>variable
    // Step 1 Assign quote1Length to be a number and assign it to quote1.length. You will need to typecast. Use <type>variable syntax
    let quote1Length: number = (<string>quote1).length;

    console.log( `quote1Length = ${quote1Length}` );


    let quote2: any = 'Laugh and the world laughs with you, snore and you sleep alone.';

    // Syntax 2: (variable as type)
    // Step 2 Assign quote2Length to be a number and assign it to quote2.length. You will need to typecast. Use variable as type syntax

    console.log( `quote2Length = ${quote2Length}` );
}());
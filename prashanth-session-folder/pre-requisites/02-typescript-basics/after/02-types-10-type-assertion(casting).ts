/*
 * Type assertions are similar to type-casting in other languages.
 * Unlike type casting, no data format conversions are done
 * Like type casting, they are a way to indicate to the compiler that you as the developer are very well aware of what you are doing by treating a variable as a different data type
 * 
 * There are 2 syntaxes for asserting type
 */

// Syntax 1: <type>variable
let quote1: any = 'Always remember that you are absolutely unique. Just like everyone else.';
let quote1Length: number = (<string>quote1).length;

console.log( `quote1Length = ${quote1Length}` );

// Syntax 2: (variable as type)
let quote2: any = 'Laugh and the world laughs with you, snore and you sleep alone.';
let quote2Length: number = (quote2 as string).length;

console.log( `quote2Length = ${quote2Length}` );
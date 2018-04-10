/*
 * Union type can be used to specify a set of types that a variable can take up
 */

// due to type inference, monthFirst is assumed to be number and cannot be assigned a value of another type later
let monthFirst = 1;
console.log( `monthFirst = ${monthFirst}` );

// monthFirst = 'January'; // error
// console.log( `monthFirst = ${monthFirst}` );

let monthLast : number | string = 12;
console.log( `monthLast = ${monthLast}` );

monthLast = 'January';
console.log( `monthLast = ${monthLast}` );

// monthLast = false; // error

// Another example involving array - an array whose items may be number or string
let months: ( number | string )[] = [ 1, 'Feb', 'Mar', 4 ];
months[4] = 'May';
months[5] = 6;
// months[12] = false; // error
console.log( `months = ${months}` );

// you can define your own type this way
type NumberOrString = number | string;
let musicNotes: NumberOrString[] = ['C', 'D', 'E', 4, 5, 'A', 'B'];
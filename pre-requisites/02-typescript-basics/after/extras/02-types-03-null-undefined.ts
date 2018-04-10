/*
 * Two types - null and undefined represent the underlying special types null and undefined
 * These two types are almost never used since they can each take up only one value - null type can take up null value, and undefined type the undefined value
 */

let x: null = null;
let y: undefined = undefined;
console.log( `x = ${x}, y = ${y}` );

// this results in an error. the only value assignable to a null type variable is null
// x = 1; // error

// however the other way is not true - null and undefined are subtypes of all other types and can be assigned to variables of other types
// Note: This behavior can be turned off using the --strictNullChecks flag during compilation
let linesOfCode: number = x;
console.log( `linesOfCode = ${linesOfCode}` );
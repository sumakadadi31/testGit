/*
 * The main feature of TypeScript is that it is a srongly-typed language (unlike JavaScript)
 * 
 * Since TypeScript is a superset of JavaScript, specifying the type is optional. Some of the types are
 * number, boolean, string - same as corresponding implicit type in JS
 */

// number type
let priceOfIPhoneX: number = 98500;
let closestDistanceBetweenEarthAndMoonInKms = 3.63104e5;
const PI: number = 3.141592653589793;

console.log( 
`priceOfIPhoneX = ${priceOfIPhoneX},
closestDistanceBetweenEarthAndMoonInKms = ${closestDistanceBetweenEarthAndMoonInKms},
PI = ${PI}`
);

// boolean type
let doINeedANewPhone: boolean = false;
console.log( `doINeedANewPhone = ${doINeedANewPhone}` );

// string type
let greeting: string = 'Hello TypeScript';
console.log( `greeting = ${greeting}` );
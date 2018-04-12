/**
 * ES2015 introduces a new construct - for..of loop, for iterating over a group of objects called Iterables (data structures that can be iterated over). Arrays, Strings and Array-like objects (arguments object of a function, DOM NodeList etc.) are all iterables. Additionally ES2015 introduces new iterable data structures like Map, Set etc.
 * 
 * Note: Unlike for..in loop, the loop variable is assigned the value, rather than index/property name. Aditinally only collection properties are returned by for..of as against all enumerable properties that are returned by for..in
 */

/**
 * Iterate over an array using for..of loop
 * v is the value
 * order is guaranteed
 * applicable to iterables only
 */
// Step 1: Use for..of to log the values in [ 10, 20, 30, 40 ]. The loop variable represents the property value, not the name

let numbers = [ 10, 20, 30, 40 ];
for( let item of numbers ) { // cannot be applied on objects - arrays and other iterables
    console.log( item );
}

for( let index in numbers ) { // for..in is for iterating through an object's properties
    console.log( numbers[index] );
}

let obj = {
    y: 2,
    a: 1
};

for( let val of obj ) { // for..in is for iterating through an object's properties
    console.log( val );
}

// Arrays, strings are all iterables
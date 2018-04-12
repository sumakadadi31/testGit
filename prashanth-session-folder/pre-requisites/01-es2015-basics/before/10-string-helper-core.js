/**
 * The script within a module is executed in its own scope (and not global scope). Thus variables, functions and classes it defines are not available outside the module by default.
 * 
 * A module needs to specify which variables, functions and classes can be used outside of it. Those exported can be used outside the module. Rest are available only within a module.
 * 
 * The export keyword is applied before a variable, function or class declaration. Alternatively use export { identifier } or export { identifier1 as identifier2 } to export something after its definition
 */

// Step 1: Export ellipsize when defining it. Export capitalize after defining it using export { identifier } syntax. Also create another export, exporting capitalize method as 'caps'.
console.log( 'start of string helper module' );

// this is not exported and hence cannot be used outside of this module (i.e. file)
let ellipsis = '...';

// function that ellipsizes a string if its length exceeds numChars
let ellipsize = ( str, numChars ) => str.length > numChars ? str.substr( 0, numChars ) + ellipsis : str;

// function that returns a version of the string passed with first letter capitalized
let capitalize = ( str ) => str.charAt( 0 ).toLocaleUpperCase() + str.substr( 1 );


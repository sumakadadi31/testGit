// Like let, const makes a variable block-scoped. Unlike let however, the variable's value cannot be changed
// Step 1.1: Create a variable using const and try changing, redeclaring it.
// Step 1.2: Declare another const variable with the same name inside a block.
// Step 1.3 Log the value of the variables both within and outside the block
// const x = 1;
// x = 2;


// Note that when used to declare an object, the variable itself cannot be re-assigned, but its properties can still be changed
// Step 2.1: Declare a const object with a property
// Step 2.2: Try assigning the variable to a new variable - this results in error
// Step 2.3: Try assigning a new value to its property - it will work fine
const obj = {
    x: 1
};
// obj = { // error
//     x: 2
// };
// Object.freeze( obj ); // ES5 feature to make properties immutable
obj.x = 2;
console.log( 'obj = ', obj );


// Aside: The ES5 method Object.freeze() can be used to prevent changes to an object's structure
/*
Object.freeze( obj ); // prevents changes to the properties
obj.a = 3; // error
*/
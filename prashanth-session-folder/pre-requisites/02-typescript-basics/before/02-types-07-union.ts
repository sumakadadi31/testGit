/*
 * Union type can be used to specify a set of types that a variable can take up
 */

(function() {
    // due to type inference, monthFirst is assumed to be number and cannot be assigned a value of another type later
    type NumberOrString = number | string;
    let monthFirst : NumberOrString = 1;
    console.log( `monthFirst = ${monthFirst}` );

    monthFirst = 'January'; // error
    // console.log( `monthFirst = ${monthFirst}` );

    
    // Step 1 Declare  monthLast to be a union type which can be assigned string or number. Check that it can be assigned both numbers as well as string values, but not other types.


    // Another example involving array - an array whose items may be number or string
    // Step 2 Declare months to be an array that can have numbers or strings (in fact this is inferred in the below declaration). Verify that you can add items that are numbers or strings but not boolean
    let months : NumberOrString[] = [ 1, 'Feb', 'Mar', 4 ];


    // you can define your own type this way
    // Step 3 Use the type keyword to define your own type that is a union of number and string types. Use it to define the type for musicNotes variable.


}());
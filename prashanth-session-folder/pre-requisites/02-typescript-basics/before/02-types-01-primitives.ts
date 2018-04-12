/*
 * The main feature of TypeScript is that it is a strongly-typed language (unlike JavaScript)
 * 
 * Since TypeScript is a superset of JavaScript, specifying the type is optional. Some of the types are
 * number, boolean, string - same as corresponding implicit type in JS
 */

(function() {
    // number type
    // Step 1: Define priceOfIPhoneX and PI as a numbers
    let priceOfIPhoneX : number = 98500;
    const PI : number = 3.141592653589793;

    console.log( 
        `priceOfIPhoneX = ${priceOfIPhoneX},
        PI = ${PI}`
    );

    // boolean type
    // Step 2: Define doINeedANewPhone as a boolean
    let doINeedANewPhone : boolean = false;
    console.log( `doINeedANewPhone = ${doINeedANewPhone}` );

    // string type
    // Step 3: Define greeting as a string type
    let greeting : string = 'Hello TypeScript';
    console.log( `greeting = ${greeting}` );
}());
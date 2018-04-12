/** 
 * Exports from other modules may be imported using the import keyword
 * 
 * Notes
 * 1. Bare imports are not yet supported - the ./ is necessary
 * 2. All modules imported within the importng module are fetched and executed before the importing module's script is run
 * 3. Modules to be imported need to be specified at compile-time. This means you cannot have an import within an if block!
 */

// Import only necessary variables, functions and classes. Only those exported can be imported here.
// including ellipsis throws an error - include it and try
console.log( 'before import' ); // this executes only after all imports are fetched and executed

// Method 1: import only what is required
// Note how the default is imported
// Step 1: Import caps and ellipsize from 10-string-helper.js module


// Method 2: import everything into an object as its properties
// Step 2: Import everything from 10-string-helper.js module as StringHelper object


console.log( 'after import' );

// console.log( 'ellipsis = ', ellipsis ); // error

// it is not possible to use exported variables, functions and classes without importing them
// Step 3: Using capitalize() throws an error - uncomment and check
// console.log( `capitalize( 'hello' ) = ${capitalize( 'hello' )}` ); // error


// Step 4: Uncomment all of the following code and note that we are able to use the imported values
// console.log( 'StringHelper = ', StringHelper );
// console.log( `StringHelper.capitalize( 'hello' ) = ${StringHelper.capitalize( 'hello' )}` );
// console.log( `caps( 'hello' ) = `, caps( 'hello' ) );
// console.log( addQuotes( 'With great power comes great responsibility' ) );

let strEl = document.getElementById( 'str' ),
    numCharsEl = document.getElementById( 'numChars' ),
    outputEl = document.getElementById( 'output' );

export let btnEllipsize = document.getElementById( 'btn-ellipsize' ); // btnEllipsize.addEventListener( 'click', () => outputEl.innerHTML = ellipsize( strEl.value, numCharsEl.value ) );
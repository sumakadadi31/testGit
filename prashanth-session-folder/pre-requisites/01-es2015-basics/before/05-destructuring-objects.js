// Object destructuring - syntax
let obj = {
    a: 1,
    b: {
        b_1: 2.1,
        b_2: 2.2
    },
    c: 3,
    d: [
        {
            e: 5,
            f: 6
        },
        {
            e: 'E',
            f: 'F'
        }
    ]
};

// extract values of properties a and b - this step declares 2 variables and initializes them
// Step 1: Extract values of properties a and b into variables a and b using object destructring syntax. Log them.
// let a = obj.a, b = obj.b; // old JS way
let { a, b } = obj;
console.log( 'a = ', a );
console.log( 'b = ', b );

/**
 * We cannot begin a statement with the destructuring syntax
 * If we declare variables explicitly and then use in destructuring we need to take care to surround the destructuring pattern in parenthesis to indicate it is an assignment expression
 */
let c, d;
({ c, d } = obj);
console.log( 'c = ', c );
console.log( 'd = ', d );

// Step 2.1: Declare x and y variables.
// Step 2.2: Use them to extract values of properties x and y in { x: 1, y: 2 }. Log them.
let { x = 100, y = 200 } = {
    x: 1
};
console.log( 'x = ', x );
console.log( 'y = ', y );

// since we use let keyword, we cannot declare variable a or b again (if we used var keyword it would be fine)
// Step 3: Try uncommenting the following - it will result in an error. Sunstitute let with var and note the outcome.
// let { a, b } = { a :'A', b: 'B' }; // will result in an error


// variables a and b already exist - so we should rename properties' destructured variables when extracting their values
// Step 4: Rename a as a2 and b as b2 when destructuring { a :'A', b: 'B' }
// let a1 = obj.a, b2 = obj.b; // old JS
// What variables are being created? - a1, b2
// What are the properties whose value is extracted from obj? - a, b
let { a : a1, b: b2 } = obj;
console.log( 'a1 = ', a1 );
console.log( 'b2 = ', b2 );

// extract values of properties a1 and b1 - results in undefined (a soft failure - no error thrown)
// Step 5: Try extracting some properties that don't exist on { a :'A', b: 'B' } and log them.
let { a_1 = 'one', b_1 = 'two' } = obj;
console.log( 'a1 = ', a_1 );
console.log( 'b1 = ', b_1 );
console.log( 'd = ', d );

// assigning default value if variable not present as property in object
// Step 6: Repeat step 5 but give a default value for the assigned variables. The variables are assigned defaults only if corresponding properties don't exist on the destructured object.


// renaming and assigning defaults at the same time
// Step 7: Extract e as p, and f as q from { e:5, f:6 }. Try extracting y as x, while giving a default to x.
let { e : p, f : q, y : x1 = 7 } = { e:5, f:6 }
console.log( 'p = ', p );
console.log( 'q = ', q );
console.log( 'x1 = ', x1 );

// destructuring sub-properties
// Note: b_1, b_# will be created using var keyword (b_1, b_3 have not been declared previously). b_3 will be assigned the default since it is a non-existent property of obj.b
// Step 8: Extract b1, b3 from obj. Give a default for b3.

/*
 * Applications of destructuring objects when working with functions
 */

// defaults may be easily assigned to function arguments using destructuring syntax
// Note: we are using the default argument feature for functions in ES2015
// Step 10: Extract a and b properties from the function argument. Give them some defaults. Also apply default for the function's argument object itself, an empty object
function foo( { a, b = 2 } = { a: 10, b: 20 } ) {
    console.log( `[defaults for function arguments] a = ${a}, b = ${b}` );
}

foo({
    a: 1
});

foo();

foo({
    a: 100,
    b: 200
});

// you can extract only what is required of the returned object using destructuring
function shoppingCart() {
    let items = [];

    let find = function( item ) {
        return items.indexOf( item );
    };

    return {
        add: function( item ) {
            if( find( item ) === -1 ) {
                items.push( item );
            }
        },
        remove: function( item ) {
            items.splice( find( item ), 1 );
        },
        show: function() {
            console.log( 'items = ', items );
        }
    };
}

// suppose we use only add() and show() methods in our code, we can extract only those and use
// Step 11: Extract add and show methods from the return value of shopping cart. Test the extracted methods.
let { add, show } = shoppingCart();
add( 'soap' );
show();
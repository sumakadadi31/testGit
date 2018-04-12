/**
 *  Function type
    Using types for arguments and return types
    The void type
    Using types when arguments or return values have a given structure (say object with a pre-defined set of properties)
    Optional arguments/properties on an object
    Typing a function expression variable (typing its arguments and return value before even assigning a function)
 */

(function() {
    // Function that accepts 2 arguments (each can be number or string) and returns a number or string
    // Step 1 Define sum to be a function that accepts 2 number types and returns a number type
    let sum = ( a : number, b : number ) : number => a + b;


    // Function that accepts 2 arguments (each number or string) and returns nothing (void type)
    // Step 2 Define log to be a function that accepts a, b as number or string and returns nothing explicitly (void)
    let log = ( a : any, b : any ) : void  => console.log( a, b );

    function diff( a: number, b: number ) : number {
        return a - b;
    }

    // Instead of specifying the type for a function's arguments and return value in the function definition, we can create a type representing the function's signature. Note the use of '=>' instead of ':' in the function type definition 
    // Note that the variable names in the type definition and the actual function need not match
    // Step 3.1 Define the type for welcome as a function that accepts a string and returns nothing. Assign it to a function that takes a string message and logs it.
    let mult : ( x: number, y : number ) => number;
    mult = ( a, b ) => a * b;

    mult( 'hello', 'world' ); // error

    // since the type is specified in the above line, welcome3 must maintain the same type
    // Step 3.2 Try uncommenting this and verify it is not allowed
    // welcome = ( message: number ) => console.log( message ); // error


    // in TypeScript all arguments are compulsory (unless mentioned as optional) - additionally the number of formal arguments and actual arguments must match (like in other popular languages)
    // Step 3.3 Try uncommenting this and verify it is not allowed
    // welcome(); // error - too few arguments
    // welcome( 'hello', 'world' ); // error - too many arguments


    // Representing optional arguments
    // Use ? to indicate optional argument
    // Step 4.1 Set message as an optional argument
    let welcome2 = (message? : string ) : void => {
        message ? console.log( '[welcome2]', message ) : console.log( '[welcome2] Received no welcome message' );
    };
    // Step 4.2 Try uncommenting this and verify it is allowed
    welcome2( 'Please come' );
    welcome2(); // the message argument is optional - so this works
    welcome( 1 ); // error


    // You can freely use ES2015 features like defaults, destructuring etc. Shown below is use of defaults for the argument
    // Step 5.1 Set message to have default value
    let welcome3 = ( message : string = 'hello' ) : void => {
        console.log( '[welcome3]', message );
    };
    // Step 5.2 Try uncommenting this and verify it is allowed
    // welcome3( 'Please come' );
    // welcome3(); // arguments are less than specified in function signature - that's ok since there is a default value


    // Complex definition involving objects and callback functions
    // Observe the signatures for success and error
    // Step 6.1 Define a signature for ajax() where success and error are method arguments that are optional. The method returns nothing
    function ajax( options: { url : string, method : string, success? : (x: string) => string, error? : (Error) => string } ): void {
        // define ajax operation here...
    }

    // Step 6.2 Try uncommenting this and verify it works
    ajax({
        url: '/messages',
        method: 'GET',
        //  contentType: 'application/json' // not accepted
        success: function( data : string ) {
            console.log( );
            return "sdsd";
        }
    });
}());
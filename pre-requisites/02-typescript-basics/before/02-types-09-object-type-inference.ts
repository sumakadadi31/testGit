/**
 * How object properties are inferred based on declaration
 * Object type inference when a method exists on an object
 */

(function() {
    // Object type
    let obj1 = {
        x: 1,
        y: 2,
        getX() {
            return this.x;
        },
        // Step 1.1 Set x to be an optional argument
        setX( x : number ) : void { // ? makes the argument optional. use void when you don't have a return value
            this.x = x;
        }
    }

    // Step 1.2 Set the type of obj2 to any
    let obj2 : any = {
        x: 1,
        y: 2
    }

    // Note: If you set obj1 to be of type any, the following will not raise errors
    // Step 1.3 Uncomment and check that z cannot be added to obj but can be added to obj2
    // obj1.z = 3; // error
    // obj2.z = 3; // does not complain since we said any

    obj1.getX();

    // Step 1.4 Uncomment and check that first statement is not acceptable, whereas second one is
    // obj1.setX( 'hello' ); // error - not accepted
    // let returnedValue = obj1.setX(); // acceptable - optional argument not passed
 }());
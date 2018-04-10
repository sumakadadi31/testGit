/**
 * How object properties are inferred based on declaration
 * Object type inference when a method exists on an object
 */

// Object type
let obj1 = {
    x: 1,
    y: 2,
    getX() {
        return this.x;
    },
    setX( x? : number ) : void { // ? makes the argument optional. use void when you don't have a return value
        this.x = x;
    }
}

let obj2 : any = {
    x: 1,
    y: 2
}

// Note: If you set obj1 to be of type any, the following will not raise errors
// obj1.z = 3; // error
obj2.z = 3; // does not complain since we said any

obj1.getX();
// obj1.setX( 'hello' ); // error - not accepted
let returnedValue = obj1.setX(); // acceptable - optional argument not passed
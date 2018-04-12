// old syntax for method of an object
// Step 1: Use the old object literal syntax to assign obj an object with property a and a method getA() that returns the value of a.
obj = {
    a: 1,
    getA: function() {
        return this.a;
    },
    setA: function( a ) {
        this.a = a;
    }
};

console.log( `[old syntax for object's methods] obj.getA() = `, obj.getA() );


// Step 2: Repeat step 1 using the new syntax for object literal's - the mthod getA() will be defined differently now.
obj = {
    a: 1,
    getA() {
        return this.a;
    },
    setA( a ) {
        this.a = a;
    }
};

console.log( `[new syntax for object's methods] obj.getA() = `, obj.getA() );
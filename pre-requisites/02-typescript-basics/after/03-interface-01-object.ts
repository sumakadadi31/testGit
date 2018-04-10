/**
 * TypeScript has the concept of interfaces just like Java and C++ (class with pure virtual functions in the latter)
 * 
 * Interface defines a contract for application code by enforcing existence of certain properties on an object, or implementation of methods with a particular signature inside of classes implementing them
 * 
 * Interfaces may also be extended just like classes
 */

(function() {
    interface Breed {
        name: string;
        averageLifespan: number; /* in years */

        /**
         * ? indicates the property is optional
         * 
         * readonly indicates it cannot be modified after initialization
         * readonly does the same for properties what const does for variables
         */
        readonly placeOfOrigin?: string;
    }

    // The first argument passed (breed) must obey the contract as defined by Breed interface
    // The first argument need be an object that implements the Breed interface - it just needs to have as a subset, the properties defined in Breed interface
    let increaseLifespan = ( breed: Breed, incr: number ) => {
        breed.averageLifespan += incr;
    };

    let goldenRetriever = {
        name: 'Golden Retriever',
        averageLifespan: 10.5,
        color: 'Light golden' // extra property
    };

    // goldenRetriever has all properties defined in Breed interface - as long as contract is obeyed extra properties are fine
    increaseLifespan( goldenRetriever, 1.5 );

    let pomeranian = {
        averageLifespan: 14
    };

    // object does not have name property as expected in Breed
    // increaseLifeSpan( pomeranian, 1.5 ); // error

    // we can even set the type of the object to the interface - this helps us catch the mistake when we define the object itself - here name is is missing and averageWeight is extra
    /*
    let chihuahua : Breed = {
        // name: 'Chihuahua',
        averageLifespan: 17,
        placeOfOrigin: 'Mexico',
        // averageWeight: 4 // in pounds // error
    };
    */ // error

    // object does not have name property as expected in Breed
    // increaseLifespan( chihuahua, 1.5 ); // error

    // readonly properties cannot be modified after initialization
    // chihuahua.placeOfOrigin = 'South America'; // error
}());
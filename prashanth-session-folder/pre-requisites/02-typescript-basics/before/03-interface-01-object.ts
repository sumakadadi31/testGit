/**
 * TypeScript has the concept of interfaces just like Java and C++ (class with pure virtual functions in the latter)
 * 
 * Interface defines a contract for application code by enforcing existence of certain properties on an object, or implementation of methods with a particular signature inside of classes implementing them
 * 
 * Interfaces may also be extended just like classes
 */

(function() {
    // Step 1 Define an interface Breed that defines name (string), averageLifespan (number), and an optional readonly property placeOfOrigin (string)
    interface Breed {
        /**
         * ? indicates the property is optional
         * 
         * readonly indicates it cannot be modified after initialization
         * readonly does the same for properties what const does for variables
         */
        name: string;
        averageLifespan: number;
        readonly placeOfOrigin: string;
        color?: string;
        //increaseLifespan : ( breed: Breed, increment: number ) => void;
    }

    // The first argument passed (breed) must obey the contract as defined by Breed interface
    // The first argument need be an object that implements the Breed interface - it just needs to have as a subset, the properties defined in Breed interface
    // Step 2 Use Breed as a type now - define a method increaseLifespan that accepts a Breed type variable and a number and increases the averageLifesapn by given amount
    let increaseLifespan : ( breed: Breed, increment: number ) => void;

    increaseLifespan = ( x : Breed, increment: number ) : void => {
        x.averageLifespan += increment;
    };

    let dog = {
        name: 'Corgi',
        averageLifespan: 12,
        placeOfOrigin: 'North America',
        // increaseLifespan( x : Breed, increment: number ) : void {
        //     x.averageLifespan += increment;
        // }
    };
    
    increaseLifespan(
        dog,
        2.5
    );

    console.log( dog.averageLifespan );

    // Step 3.1 Define a goldenRetriever object with following properties - observe that we have not set it to Breed type
    // name: 'Golden Retriever',
    // averageLifespan: 10.5,
    // color: 'Light golden' // extra property

    let goldenRetriever : Breed = {
        name: 'Golden Retriever',
        averageLifespan: 10.5,
        color: 'Light golden', // optional
        placeOfOrigin: 'North America'
    };

    // goldenRetriever.placeOfOrigin = 'India';
    

    // goldenRetriever has all properties defined in Breed interface - as long as contract is obeyed extra properties are fine
    // Step 3.2 Call increaseLifespan() passing goldenRetriever object and a number. Note that the object is accepted by the method as long as the structure of the object is in accordance with Breed interface


    // Step 3.3 Define pomeranian with the following property
    // averageLifespan: 14

    // object does not have name property as expected in Breed
    // Step 3.4 Call increaseLifespan() passing pomeranian object and a number. This object is not accepted by the method


    // we can even set the type of the object to the interface - this helps us catch the mistake when we define the object itself - here name is is missing and averageWeight is extra
    // Step 4.1 Define chihuahua as a Breed type. Give the following properties. Note that it is an error now as Breed cannot have averageWeight property.
    // name: 'Chihuahua',
    // averageLifespan: 17,
    // placeOfOrigin: 'Mexico',
    // averageWeight: 4 // in pounds // error

    // object does not have name property as expected in Breed
    // Step 4.2 Now remove name property from chihuahua and try calling increaseLifespan() passing the object to it. This results in an error.
    
    // readonly properties cannot be modified after initialization
    // Step 4.3 Verify that placeOfOrigin cannot be modified
    
}());
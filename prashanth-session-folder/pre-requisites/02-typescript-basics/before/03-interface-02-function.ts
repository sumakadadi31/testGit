/**
 * Interfaces may also be used to define function signatures
 */

(function() {
    // an interface defining an object with properties that are not functions
    interface Breed {
        name: string;
        averageLifespan: number;
        readonly placeOfOrigin?: string;
    }

    // an interface defining a method
    // Step 1.1 Use IncreaseLifespan interface to define the signature of a method that accepts Breead and number type and returns nothing
    
    // Step 1.2 Define the type of increaseLifespan method to the previously defined interface
    let increaseLifespan = ( breed, incr ) => {
        breed.averageLifespan += incr;
    };

    // Step 1.3 Verify that the following works
    let goldenRetriever = {
        name: 'Golden Retriever',
        averageLifespan: 10.5
    };

    increaseLifespan( goldenRetriever, 1.5 );
}());
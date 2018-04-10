/**
 * Interfaces may also use function signatures for methods
 */

(function() {
    // an interface defining an object with properties and methods
    interface Breed {
        name: string;
        averageLifespan: number;
        readonly placeOfOrigin?: string;
        
        // Step 1.1 Define increaseLifespan as a method that accepts a number and returns nothing
    }

    let goldenRetriever : Breed = {
        name: 'Golden Retriever',
        averageLifespan: 10.5,

        // Step 1.2 Uncomment and do some changes - eg. change argument to a different type and check that it raises an error
        // increaseLifespan: ( incr: number ) => {
        //     this.averageLifespan += incr;
        // }
    };

    // Step 1.3 Verify this works if the method definition is correct
    // goldenRetriever.increaseLifespan( 1.5 );
}());
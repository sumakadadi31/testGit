/**
 * Interfaces may also use function signatures for methods
 */

(function() {
    // an interface defining an object with properties and methods
    interface Breed {
        name: string;
        averageLifespan: number;
        readonly placeOfOrigin?: string;
        
        increaseLifespan: ( incr: number ) => void;
    }

    let goldenRetriever : Breed = {
        name: 'Golden Retriever',
        averageLifespan: 10.5,

        // do some changes - eg. change argument to a different type and check
        increaseLifespan: ( incr: number ) => {
            this.averageLifespan += incr;
        }
    };

    goldenRetriever.increaseLifespan( 1.5 );
}());
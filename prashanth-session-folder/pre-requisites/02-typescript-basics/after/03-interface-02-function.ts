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
    interface IncreaseLifespan {
        ( breed: Breed, incr: number /* in years */ ) : void
    }
    
    let increaseLifespan : IncreaseLifespan = ( breed: Breed, incr: number ) => {
        breed.averageLifespan += incr;
    };

    let goldenRetriever = {
        name: 'Golden Retriever',
        averageLifespan: 10.5
    };

    increaseLifespan( goldenRetriever, 1.5 );
}());
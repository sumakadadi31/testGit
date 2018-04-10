/**
 * Interfaces may also be extended just like classes
 */

(function() {
    interface IncreaseLifespan {
        ( incr: number ) : void
    }

    interface Breed {
        name: string;
        averageLifespan: number;
        readonly placeOfOrigin?: string;
        
        increaseLifespan: IncreaseLifespan;
    }

    // Step 1 Define CorgiBreed as an interface that "extends" Breed
    interface CorgiBreed {
        // In TypeScript, a set of number literals can also be specified in place of type
        
        // Step 2 Note this usage in TypeScript for a set of numbers assignable to a property
        energyLevel: 1 | 2 | 3 | 4 | 5;
    }

    let increaseLifespan : IncreaseLifespan = ( incr: number ) => {
        this.averageLifespan += incr;
    };

    // Step 3 Verify that without energyLevel being specified, these 2 object declarations would result in an error
    // let pembrokeWelsh : CorgiBreed = {
    //     name: 'Pembroke Welsh Corgi',
    //     averageLifespan: 13,
    //     energyLevel: 4, // try giving a value out of the range 1 - 5 and check
    //     increaseLifespan: increaseLifespan
    // };

    // pembrokeWelsh.increaseLifespan( 0.5 );

    // let cardiganWelsh : CorgiBreed = {
    //     name: 'Cardigan Welsh Corgi',
    //     averageLifespan: 14,
    //     energyLevel: 3, // try giving a value out of the range 1 - 5 and check
    //     increaseLifespan: increaseLifespan
    // };

    // cardiganWelsh.increaseLifespan( 0.25 );
}());
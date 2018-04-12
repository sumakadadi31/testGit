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

    interface CorgiBreed extends Breed {
        // In TypeScript, a set of number literals can also be specified in place of type
        energyLevel: 1 | 2 | 3 | 4 | 5;
    }

    let increaseLifespan : IncreaseLifespan = ( incr: number ) => {
        this.averageLifespan += incr;
    };

    // without energyLevel being specified, these object declarations would result in an error
    let pembrokeWelsh : CorgiBreed = {
        name: 'Pembroke Welsh Corgi',
        averageLifespan: 13,
        energyLevel: 4, // try giving a value out of the range 1 - 5 and check
        increaseLifespan: increaseLifespan
    };

    pembrokeWelsh.increaseLifespan( 0.5 );

    let cardiganWelsh : CorgiBreed = {
        name: 'Cardigan Welsh Corgi',
        averageLifespan: 14,
        energyLevel: 3, // try giving a value out of the range 1 - 5 and check
        increaseLifespan: increaseLifespan
    };

    cardiganWelsh.increaseLifespan( 0.25 );
}());
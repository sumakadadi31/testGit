/**
 * One or more interfaces can be implemented by a class - the class's properties and methods then have to implement the properties and methods in the interfaces
 */

(function() {
    interface IncreaseLifespan {
        ( incr: number ) : void
    }

    interface IBreed {
        name: string;
        averageLifespan: number;
        readonly placeOfOrigin?: string;
        
        increaseLifespan: IncreaseLifespan;
    }

    interface ICorgiBreed extends IBreed {
        // In TypeScript, a set of number literals can also be specified in place of type
        energyLevel: 1 | 2 | 3 | 4 | 5;
    }

    interface IStats {
        height: number; /* in pounds */
        weight: number; /* in feet */
    }

    // CorgiBreed class has to include all properties from ICorgiBreed and IStats
    // Additionally the methods declared in the interfaces need to be implemented
    // Step 1.1 Define class CorgiBreed to implement both ICorgiBreed and IStats interfaces
    class CorgiBreed {
        // Step 1.2 Define the interface properties and provide the method definitions. Not that the data type should not be repeated, and if repeated it should match that in the interface. Readonly properties need not be implemented

        // Step 2 Note the syntax of a constructor
        constructor( name: string, averageLifespan: number, energyLevel: number, height: number, weight: number ) {
            this.name = name;
            this.averageLifespan = averageLifespan;
            this.energyLevel = energyLevel;
            this.height = height;
            this.weight = weight;
        }        
    }

    // Step 2 Verify that these work
    // let pembrokeWelsh = new CorgiBreed( 'Pembroke Welsh Corgi', 13, 4, 1, 25 );
    // pembrokeWelsh.increaseLifespan( 0.5 );

    // let cardiganWelsh = new CorgiBreed( 'Cardigan Welsh Corgi', 14, 3, 1, 31.5 );
    // cardiganWelsh.increaseLifespan( 0.25 );
}());
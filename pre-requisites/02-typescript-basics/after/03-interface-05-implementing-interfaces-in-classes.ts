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
    class CorgiBreed implements ICorgiBreed, IStats {
        name: string;

        // the data type need not be repeated. If repeated it must be same as in interface
        averageLifespan;
        
        // readonly placeOfOrigin?: string; // optional property need not be implemented
        energyLevel; // takes on interface specified number values in the range 1 - 5
        height: number;
        weight: number;

        constructor( name: string, averageLifespan: number, energyLevel: number, height: number, weight: number ) {
            this.name = name;
            this.averageLifespan = averageLifespan;
            this.energyLevel = energyLevel;
            this.height = height;
            this.weight = weight;
        }
        
        increaseLifespan( incr: number ) {
            this.averageLifespan += incr;
        };
    }

    let pembrokeWelsh = new CorgiBreed( 'Pembroke Welsh Corgi', 13, 4, 1, 25 );
    pembrokeWelsh.increaseLifespan( 0.5 );

    let cardiganWelsh = new CorgiBreed( 'Cardigan Welsh Corgi', 14, 3, 1, 31.5 );
    cardiganWelsh.increaseLifespan( 0.25 );
}());
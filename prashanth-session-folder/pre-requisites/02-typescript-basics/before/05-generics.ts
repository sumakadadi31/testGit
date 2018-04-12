/**
 * Generics give the ability to customize the data type of variables/properties used within functions/classes.
 * Generics promote reuse of code for functions and classes which essentially do the same thing, and whose sole difference is the types they work with
 */

(function() {
    // Generic function that returns the passed argument - it accepts an argument of type T and returns one of type T
    function identity<T>( val: T ) : T {
        return val;
    }

    // calling identity with number type
    console.log( identity<number>( 1 ) );

    // calling identity with number type
    console.log( identity<string>( 'hello' ) );

    // notice how this is not permitted
    console.log( identity<string>( 1 ) );

    // Generic class
    interface BillableItem {
        price: number;
    }

    class List<T extends BillableItem> {
        private _items: T[];

        add( item: T ) {
            this._items.push( item );
        }

        show() {
            for( let item of this._items ) {
                console.log( item );
            }
        }
    }

    class Service implements BillableItem {
        constructor( public addressOfCustomer: string, public description: string, public price: number, public startDate: Date, public endDate: Date = startDate ) { }
    }

    class Product implements BillableItem {
        constructor( public shippingAddress: string, public name: string, public price: number ) { }
    }

    let carpetCleaning = new Service( 'A302, Brigade Gardenia, JP Nagar', 'Carpet cleaning', 2000, new Date( 2017, 11, 24 ) );
    let laundry = new Service( '204, 18st Cross, Margosa Road, Malleshwaram', 'Laundry', 450, new Date( 2018, 0, 2 ) );
    let upcomingJobs : List<Service> = new List<Service>();
    upcomingJobs.add( carpetCleaning );
    upcomingJobs.add( laundry );
    upcomingJobs.show();

    // Exercise: Similarly, create a list of Products (say, representing a shopping cart), and show the items
}());
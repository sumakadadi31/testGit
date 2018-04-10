/// <reference path="../node_modules/rxjs/Rx.d.ts" />

import Rx from 'rxjs/Rx';

// Reference: http://rxmarbles.com/#interval
// create an event every second with payload being the number of the event (starting from 0)
let observable = Rx.Observable.interval(1000);

class MyObserver {
    next( item ) {
        console.log( item );
    }

    error( err ) {
        console.log( err );
    }

    complete() {
        console.log( 'end of event stream' );
    }
}

let observer = new MyObserver(); // create an Observer object in order to subscribe to observable
let subscription = observable.subscribe( observer ); // you get a subscription object in return

// use the subscription object to unsubscribe the observer after 10 seonds
setTimeout(function() {
    subscription.unsubscribe();
}, 10000);

// Exercise: Use Observable.from() to create an observable whose payload is set from an array of strings - since the array is one finite length, you will see complete() being triggered at the end of the event stream.
let array = ['it', 'is', 'a', 'beautiful', 'day' ];
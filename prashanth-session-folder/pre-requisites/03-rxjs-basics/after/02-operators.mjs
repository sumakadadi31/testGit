/**
 * Operators in rxjs transform one observable into another
 * 
 * Observables can be chained
 * observable 0 -> pass through operator 1 to get observable 1 -> pass through oerator 2 to get observable 2 -> ...
 * 
 * Think of them as being similar to array iterator methods like find(), filter() etc. (but for the streams of events that observables are)
 */

/// <reference path="../node_modules/rxjs/Rx.d.ts" />

import Rx from 'rxjs/Rx';

// emit an event every 1 second
let observable = Rx.Observable.interval( 1000 );

// using do() returns an identical observer - this is used a mechanism to intercept events and do something - example logging events
// map() transforms the observable's payload and outputs a new observable (similar to array's map method)
// using filter() create a new observable with only events with even number payload (similar to array's filter method)
let evenNumbersObservable = observable
                                .do( val => console.log( '[do] event with payload ' + val + ' fired' ) )
                                .map( val => {
                                    let newVal = val * 3;
                                    console.log( '[map] new value = ', newVal );
                                    return newVal;
                                })
                                .filter( val => val % 2 === 0 );

// intead of passing an observer object, subscribe() can also be passed the next(), error() and complete() methods as arguments
evenNumbersObservable.subscribe(
    ( val ) => console.log( '[after filter] ' + val ),
    ( err ) => console.log( err ),
    () => console.log( 'end of event stream' )
);


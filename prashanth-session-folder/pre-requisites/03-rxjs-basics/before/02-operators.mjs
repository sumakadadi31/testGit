/**
 * Operators in rxjs transform one observable into another
 * 
 * Observables can be chained
 * observable 0 -> pass through operator 1 to get observable 1 -> pass through oerator 2 to get observable 2 -> ...
 * 
 * Think of them as being similar to array iterator methods like find(), filter() etc. (but for the streams of events that observables are)
 */

// Step 1: Include rxjs

// Step 2: emit an event every 1 second

// using do() returns an identical observer - this is used a mechanism to intercept events and do something - example logging events
// map() transforms the observable's payload and outputs a new observable (similar to array's map method)
// using filter() create a new observable with only events with even number payload (similar to array's filter method)
// Step 3: Use the above methods to generate a transformed observable

// intead of passing an observer object, subscribe() can also be passed the next(), error() and complete() methods as arguments
// Subscribe to the transformed observable
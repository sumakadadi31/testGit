// Step 1: Install and import rxjs - refer to the type definition file too

// Reference: http://rxmarbles.com/#interval
// Step 2: create an event every second with payload being the number of the event (starting from 0) - Use Rx.Observable.interval()

// Step 3.1: Create an Observer class with next(), error() and complete() methods, and create an instance.
// Step 3.2: Subscribe to the observable using observable.subscribe( observer ). It returns a subscription.
// Step 3.3: Unsubscribe after 10 seconds using subscription.unsubscribe();



// Exercise: Use Observable.from() to create an observable whose payload is set from an array of strings - since the array is one finite length, you will see complete() being triggered at the end of the event stream.
// let array = ['it', 'is', 'a', 'beautiful', 'day' ];
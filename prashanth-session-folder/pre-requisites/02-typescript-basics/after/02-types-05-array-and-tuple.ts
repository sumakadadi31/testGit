// general array (with items of different type)
let count: any[] = [ false, true, 2, 'three', [ 4, 5, 'six' ] ];
console.log( `greeting = ${greeting}` );

// an array of a particular type (string in this case)
let days : string[] = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
console.log( `days = ${days}` );

// there is a generic Array<type> similar to languages with templates (generics) like C++ and Java
let fruits: Array<string> = [ 'Apples', 'Oranges', 'Bananas' ];

// tuple type - [<type_1>, <type_2>, ...]
// this assigns data type for items a fixed size array
let keyValuePair: [string, number] = ['luckyNumber', 7];
let keyValuePairs: [string, string][] = [
    ['color', 'Gold'],
    ['camera', '13mp'],
    ['screen', 'Gorilla Corning Glass']
];
console.log( 'keyValuePair = ', keyValuePair );
console.log( 'keyValuePairs = ', keyValuePairs );
(function() {
    // general array (with items of different type)
    // Step 1 Define count to be an array having items of any type
    let count : any[] = [ false, true, 2, 'three', [ 4, 5, 'six' ] ];
    console.log( `count = ${count}` );

    
    // an array of a particular type (string in this case)
    // Step 2 Define days to be an array having items of string type
    let days : string[] = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    console.log( `days = ${days}` );


    // there is a generic Array<type> similar to languages with templates (generics) like C++ and Java
    // Step 3 Define fruits to be an array of items of string type using th generics syntax
    let fruits : Array<string> = [ 'Apples', 'Oranges', 'Bananas' ];
}());
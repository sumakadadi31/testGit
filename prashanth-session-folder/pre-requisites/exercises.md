# Latest Advances in JavaScript (Babel, TyeScript, RxJS, ES2015 and beyond)

## Babel

### Exercise #1
    - Use Babel REPL to see how the following translate
      () => 0;
      (a, b) => {
          console.log( 'summing');
          return a + b;
      }

### Exercise #2 (Babel CLI - Installing and running Babel)
    - Write a function that gets the value in an input box on the page and displays it in a span whenever the value of the input changes. Use ES6 features let, arrow functions and make sure to include Babel in the browser.
    - Does the same program run in your browser if you remove Babel from the page?
    - Which mobile browsers will they run on if Babel is not included?

### Exercise #3 (Command line options, .babelrc file, plugins and presets)
    - Move the script you created in the earlier exercise to a separate .js file within an /src folder. Create a .babelrc file. Use the Babel CLI to generate transpiled file in a /build folder. Find out the option to start build with a watch and check that files are recompiled on changes. Add some more files. Find out the option to create a bundle file (single file concatenating all files in src/ folder).

## ES2015 (previously ES6)

### Exercise 4 (let, const)
    - Create an empty HTML document. Through JS add a list (<ul><li>...<li></ul>) - add code within the loop where you add list items so that the list items when clicked should log the index of the list item (0, 1, ...) in the console. Do this through ES5 (using closures). Repeat this using let.


* Strings and Templating
* Object and Array Destructuring
* Arrow Functions
* Default Parameters, Rest and Spread

### Exercise 5
    - Write a function that accepts that makes an Ajax call and accepts 4 arguments - method, url, success, error. The method is to have default value 'GET' and the error function is to have a default that logs the error to the console. Do this using ES5 and ES6.

### Exercise 6
    - Write a function that sorts the arguments passed to it. Make sure to use the rest operator.

### Exercise 7
    - Given an array, find the maximum number. (Refer to the use of Math.max() from an earlier module)


* Object Literals
* Classes and Modules
* Arrays, Maps and Sets
* Promises, Iterators and Generators

## Miscellaneous Topics
* Reactive Extensions Library - RxJS
* Brief Introduction to the TypeScript Language Features
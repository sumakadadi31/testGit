// Array destructuring - syntax
let arr = [1, 2, 3, 4];

// Step 1: Use array destructuring syntax to extract the first 2 item values into variables a and b. Log them.
// let first = arr[0], second = arr[1]; // old way
let [first, second] = arr; // destructuring of arrays

// Skipping items when destructuring
// Step 2: Extract only first, third and fifth values from array [1,2,3,4,5]. Log them.
let one, two, three;
[one, , three, , five] = arr;
console.log( one, three, five );

// Separate declaration and initialization for variables when destructuring
// Step 3: Separate out the declaration and destructring statements and repeat step 2.1
// give a default value of 5 if fifth item is not present
[one, , three, , five = 5] = arr;
console.log( one, three, five );


// Assigning default values when destructuring
// Step 4: Extract first, third, fifth and seventh values from array [1,2,3,4,5]. Provide a default value for few including the seventh one. Log them.

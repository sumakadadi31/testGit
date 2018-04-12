/**
 * Definition of Person class using old syntax. As a good practice we add methods to the prototype property of the Person constructor function - all instances of Person get their prototype set to Person.prototype
 */

 /**
  * Step 1.1: Define a Person constructor that sets name and age
  * Step 1.2: Set a static method sayHello() on Person that simply logs 'hello'
  * Step 1.3: Define instance methods - getters and setters for name and age
  * Step 1.4: Define another instance method celebrateBirthday() taht increments the age by 1
  * Step 1.5: Test out the class and it methods
  */
// function Person( name, age ) {
//     this.name = name;
//     this.age = age;
// }

// Person.sayHello = function() {
//     console.log( 'hello' );
// };

// Person.prototype.getAge = function() {
//     return this.age;
// };

// Person.prototype.setAge = function( age ) {
//     this.age = age;
// };

// Person.prototype.celebrateBirthday = function() {
//     this.age++;
// };

// let john = new Person( 'John', 32 );
// console.log( 'john = ', john );
// Person.sayHello();
// john.celebrateBirthday();
// console.log( john.getAge() );

/**
 * Definition of Person2 class using new syntax. A special method called constructor() is called when an instance is created. Additionally static methods are now directly supported.
 * The syntax for new features is similar to the one used in most common OOP languages like C++, Java etc.
 * Note: Under the hood, ES205 still uses prototypical inheritance (inheritance using an object's prototype) rather than classical inheritance used by C++, Java etc.
*/
// Step 2: Now repeat step 1 to define a class Person2 with similar methods. Use constructor() to initialize. Prefix static method with static keyword. Use new method definition syntax.
class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    static sayHello() {
        console.log( 'hello' );
    }

    getAge() {
        return this.age;
    }

    setAge( age ) {
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

let john = new Person( 'John', 32 );
console.log( 'john = ', john );
Person.sayHello(); // note that since this is a static method, we call using class and not object john
john.celebrateBirthday();
console.log( john.getAge() );

// Exercise: Create an Employee class - has name, age, dept and role properties - define getters and setters (for say 2 of the 4 properties - name and dept). Also define celebrateBirthday() method which prints "You receive a gift voucher of Rs. 1000" and increases age of employee by 1
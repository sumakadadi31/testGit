/**
 * Classes
 * 
 * Can have private & public members (IDE enforced and not enforced in generated code)
 * Shorthand notation for creating fields and setting them in a constructor
 * Using classes as types (example Employee has an Address field)
 */

(function() {
    // readonly properties of a class can be initialized here or in constructor; protected properties can be accessed in inherited classes        
    // you can also define members as private instead of public - this constraint is design-time enforced, meaning the IDE will report it as an error if you try to access private properties and methods outside the class - the .ts -> .js conversion will still happen and the .js file will have no trace of access modifier
    /**
     * Step 1.1 Define a class Address that has the following properties
     *      _name - a protected readonly string
     *      first_line - a public string (default is public)
     *      second_line - a public string
     *      pincode - a public number
     *      _contactNumber: a private arrays of number types
     * Also define a constructor to intialize values
     */

    // Step 1.2 Define an object of type address and try modifying its readonly property name
    // let rahulName = 'Rahul';
    // let rahulAddress = new Address( rahulName, '12, Tughlak Lane', 'New Delhi', 110100, [23795161, 23012410] );
    // rahulAddress.name = 'Rahul Gandhi'; // error


    // Step 2.1 Define class Person with name and age
    // Define name explicitly and create age and address as properties using the constructor (by specifying the access modifier in the constructor). Also define a celebrateBirthday() method

    // Step 2.2 Create an object of Person type
    // let rahul = new Person( 'Rahul', 47, rahulAddress );


    // Interfaces are meant to standardize public facing API of a class. Consequently, they cannot specify private members that a class should have. 
    // Step 3.1 Define an interface Employee with empid (number), dept (string) and role (string)

    // Step 3.2 Define class Employee that extends Person and implements IEmployee interface. Override celebrateBirthday() and call the super class (Person) celebrateBirthday() method first within it - use super keyword

    // Step 3.3 Define an employee object and call celebrateBirthday()
    // let sonia = new Employee( 'Sonia', 70, rahulAddress, 1001, 'None', 'Former Party President' );
    // sonia.celebrateBirthday();
}());

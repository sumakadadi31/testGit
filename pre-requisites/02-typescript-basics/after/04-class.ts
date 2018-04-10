/**
 * Classes
 * 
 * Can have private & public members (IDE enforced and not enforced in generated code)
 * Shorthand notation for creating fields and setting them in a constructor
 * Using classes as types (example Employee has an Address field)
 */

(function() {
    class Address {
        // TypeScript defines public, protected and private access modifiers
        // There is an additional readonly modifier (can be applied along with access modifiers) - this makes a property value immutable once it is set
        protected readonly _name: string; // readonly properties can be initialized here or in constructor; protected properties can be accessed in inherited classes
        public first_line: string;
        
        // By default all members are public - so the public modifier may be skipped
        second_line: string;
        pincode: number;

        // you can also define fields as private instead of public
        // This constraint is design-time enforced, meaning the IDE will report it as an error if you try to access private properties and methods outside the class - the .ts -> .js conversion will still happen and the .js file will have no trace of access modifier
        private _contactNumber: number[];

        constructor( _name: string, first_line: string, second_line: string, pincode: number, _contactNumber: number[] ) {
            this._name = name;
            this.first_line = first_line;
            this.second_line = second_line;
            this.pincode = pincode;
            this._contactNumber = _contactNumber;
        }
    }

    let rahulName = 'Rahul';
    let rahulAddress = new Address( rahulName, '12, Tughlak Lane', 'New Delhi', 110100, [23795161, 23012410] );
    
    // trying to modify readonly property results in an error
    // rahulAddress.name = 'Rahul Gandhi'; // error

    class Person {
        name : string;
        
        // created via constructor syntax (see constructor below)
        // age : number;
        // private _address: Address;

        // Adding readonly modifier and access modifiers to the constructor arguments results in properties with same name and specified access level
        constructor( name: string, public age: number, private _address: Address ) {
            this.name = name;
        }

        celebrateBirthday() {
            this.age++;
        }
    }

    let rahul = new Person( 'Rahul', 47, rahulAddress );

    // Interfaces are meant to standardize public facing API of a class. Consequently, they cannot specify private members that a class should have. 
    interface IEmployee {
        empid: number;
        dept: string;
        role: string;
    }

    class Employee extends Person implements IEmployee {
        // since EMployee is implementing the IEMployee interface, empid, dept and role are public
        constructor( name: string, age: number, address: Address, public empid: number, public dept: string, public role: string ) {
            super( name, age, address );
        }

        celebrateBirthday() {
            super.celebrateBirthday();
            console.log( `Hello ${this.name}. Happy Birthday!` );
        }        
    }

    let sonia = new Employee( 'Sonia', 70, rahulAddress, 1001, 'None', 'Former Party President' );
    sonia.celebrateBirthday();
}());

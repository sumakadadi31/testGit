# Typescript
* What is TypeScript and what are its features?
* Installing TypeScript compiler and using it
* tsconfig.json for configuring tsc compilation
* Getting started
* Types for variables
    * any
    * number, boolean, string
    * Type inference
    * arrays - homogeneous, mixed-type
    * Object type
        * How object and object properties are inferred based on declaration
        * Object type inference Inference when a method exists on an object
    * Function type
        * Using types for arguments and return types
        * The void type
        * Optional arguments/properties on an object
        * Typing a function expression variable (typing its arguments and return value before even assigning a function)
        * Using types when arguments or return values have a given structure (say object with a pre-defined set of properties)
* Classes
    * Private and public members (IDE enforced and not enforced in generated code)
    * Shorthand notation for creating fields and setting them in a constructor
    * Using classes as types (example Employee has an Address field)
* Type-casting
    * Why it is necessary and how to use it
    * Examples
        * Typecasting return value of document.getElementById()
        * Accessing derived class methods when using a base class reference
* Interfaces
    * Interface for objects - types for properties and methods
    * Implementing an object using an interface as type
    * Definining a reusable function signature via an interface
    * Defining an interface for a class
    * Extending interfaces
* Installing and using type-definition files
    * Type-definition files for popular libraries/frameworks
    * Installing type-definition files using npm

## Installation
* Installation: npm install -g typescript
* Compilation: tsc <filename.ts>

## References
* [http://www.typescriptlang.org/](http://www.typescriptlang.org/)
* [This is the first page - check the Handbook link in sidebar menu](https://www.typescriptlang.org/docs/handbook/basic-types.html)
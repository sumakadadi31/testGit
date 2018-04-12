/**
 * Decorators are the equivalent of annotations in Java and C#.
 *
 * They can be applied on a class, property, method, accessor (getter-setter properties) or method parameter
 * Once applied they add extra capability to the applied construct
 *
 * Source of demo: https://stackoverflow.com/questions/29775830/how-to-implement-a-typescript-decorator
 * Another reference: http://blog.wolksoftware.com/decorators-reflection-javascript-typescript
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function () {
    function log() {
        return function (target, propertyKey, descriptor) {
            var originalMethod = descriptor.value; // save a reference to the original method
            // NOTE: Do not use arrow syntax here. Use a function expression in 
            // order to use the correct value of `this` in this method (see notes below)
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // pre
                console.log("The method args are: " + JSON.stringify(args));
                // run and store result
                var result = originalMethod.apply(this, args);
                // post
                console.log("The return value is: " + result);
                // return the result of the original method (or modify it before returning)
                return result;
            };
            return descriptor;
        };
    }
    var Person = /** @class */ (function () {
        function Person(_name, _age) {
            this._name = _name;
            this._age = _age;
        }
        Person.prototype.increaseAge = function (incr) {
            this._age += incr;
            return this._age;
        };
        __decorate([
            log()
        ], Person.prototype, "increaseAge");
        return Person;
    }());
    var salim = new Person('Salim Shaikh', 41);
    salim.increaseAge(2);
}());

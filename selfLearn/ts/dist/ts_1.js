"use strict";
// Type Annotations
let sonName = 'Zayaan';
let sonAge = 0.2;
let isHealthy = true;
// Function with type
function printBabyInfo() {
    console.log(`Baby Name: ${sonName}. Age: ${sonAge}`);
}
printBabyInfo();
const person = {
    name: "Zayaan",
    age: 0.2,
};
console.log(person.name);
// Enums
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Inactive"] = "Inactive";
})(Status || (Status = {}));
let currentStatus = Status.Active;
console.log(currentStatus);
// Type Aliases
let age = person.age;
// Class and Object Oriented Feature
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Greeting ${this.name}`);
    }
}
const person1 = new Person("Mazharul", 27);
person1.greet();
// Type Assertions
let someValue = '2nd January 2025';
let stringLength = someValue.length;
console.log(stringLength);

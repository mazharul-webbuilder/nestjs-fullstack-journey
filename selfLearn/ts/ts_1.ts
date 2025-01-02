// Type Annotations
let sonName: string = 'Zayaan';
let sonAge: number = 0.2;
let isHealthy: boolean = true;

// Function with type
function printBabyInfo(): void
{
    console.log(`Baby Name: ${sonName}. Age: ${sonAge}`);

}
printBabyInfo();

// Interfaces
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Zayaan",
    age: 0.2,
}

console.log(person.name);

// Enums
enum Status {
    Active = 'Active',
    Inactive = 'Inactive',
}

let currentStatus =  Status.Active;
console.log(currentStatus);


// Type Aliases
let age: number|string = person.age;

// Class and Object Oriented Feature

class Person {
    name: string;
    age: number|string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet(){
        console.log(`Greeting ${this.name}`);
    }
}

const person1: Person = new Person("Mazharul", 27);
person1.greet();

// Type Assertions
let someValue: string = '2nd January 2025'
let stringLength: number = (<string>someValue).length;

console.log(stringLength);
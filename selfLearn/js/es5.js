// Released 2003

// Strict Mode
"use strict"

// Json Support
var jsonString = '{"name": "Zayaan", "age": 0.8}'
console.log(jsonString)

var parseData = JSON.parse(jsonString)
console.log(parseData)

var personObject = {
    name: 'Zayaan',
    age: 0.8
}
var personObjToJson = JSON.stringify(personObject)
console.log(personObjToJson)

// Object Methods
var sonObject = {
    name: "Zayaan",
    greet: function () {
        return "Hello, " + this.name
    }
}
// Create new object from a object
var newSon = Object.create(sonObject);
newSon.name = 'Sunehra'
console.log(newSon.greet())

var objCustomBehaviors = {}
// defineProperty
Object.defineProperty(objCustomBehaviors, "message", {
    value: "This is a custom property",
    writable: true,
    configurable: true,
    enumerable: true
})
objCustomBehaviors.message = 'modified message'

console.log(objCustomBehaviors.message)

// defineProperties
var definePropertiesObj = {}
let internalAge = 5;

Object.defineProperties(definePropertiesObj, {
    name: {
        value: 'Zayan',
        writable: true,
        enumerable: false,
        configurable: true
    },
    age: {
        get: function () {
            return internalAge;
        },
        set: function (value) {
            internalAge = value + 15;
        },
        enumerable: true,
        configurable: true
    }
});
// Correct way to invoke the setter:
definePropertiesObj.age = 22;
console.log(definePropertiesObj.age);

// Function Methods
var newObj = {
    name: 'Lammim'
}

function newGreet(){
    console.log("Hello " + this.name)
}

var boundGreet = newGreet.bind(newObj)
boundGreet()

// Array forEach to non-array object
var obj =  { 0: 'a', 1: 'b', 2: 'c', length: 3 }

Array.prototype.forEach.call(obj, function (item) {
    console.log(item)
})


// Features
// 1. Strict Mode
// 2. JSON parse and stringify
// 3. Create Object from a object
// 4. Add Property in existing object
// 5. Add multiple properties in object
// 6. bind method
// 7. Non array object foreach

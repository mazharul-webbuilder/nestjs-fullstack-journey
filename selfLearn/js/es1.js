// Released 1997

// Variable
var message = 'Hello JavaScript';
console.log(message)

// Function Definition
function great(name){
    console.log("Hello, " + name + "!")
}

great('Mazharul')

// Control Statement
for (var i = 1; i <= 10; i++){
    console.log(i)
}

// Basic Data Types
var stringType = 'I am string type'
var numberType = 50
var booleanType = true
var nullType = null
var undefined

console.log(typeof stringType)
console.log(typeof numberType)
console.log(typeof booleanType)
console.log(typeof nullType) // output object
console.log(typeof undefined)

// Object and Arrays
var person = {
    name: "Mazharul",
    age: "26"
}

console.log(person.name)

var colors = ['red', true, null, 52]
console.log(colors[2])

// String Methods
var text = 'JavaScript'
console.log(text.length)
console.log(text.charAt(0))
console.log(text.indexOf('S'))
console.log(text.substring(0, 2))

// Global Functions
console.log(isNaN('fasdf'))
console.log(parseInt('32423'))

// Error Handling
function basicErrorHandling(){
    try {
        throw "Something went wrong"
    } catch (error){
        console.log(error)
    }
}
basicErrorHandling()

// Prototype
// Example: 1
function Animal(name){
    this.name = name
}

Animal.prototype.speak = function () {
    return this.name + ' ' + 'make sounds'
}

var cat = new Animal('Cat')
console.log(cat.speak()) // Output Cat make sounds

// Example 2
function Student(name){
    this.name = name

}

Student.prototype.age = 26
Student.prototype.institute = function () {
    return this.name + ' ' + 'Student of Dhaka Medical College'
}

var student1 = new Student('Zayaan')
console.log(student1.age)
console.log(student1.institute())
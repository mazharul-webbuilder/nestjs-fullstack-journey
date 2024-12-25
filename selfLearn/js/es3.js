// Released 1999

// Regular Expression
var pattern = /hello/i
var text = 'Hello world'
console.log(pattern.test(text))

// More String Method Introduces
var myText = '         Mazharul '
console.log(myText.trim())

// array methods
var arr = [1, 2, 3, 4, 5]
arr.forEach(function (item) {
    console.log(item)
}) // Not return new array

arr.map(function (item){
    console.log(item)
}) // return new array

arr.filter(function (item) {
    console.log(item)
}) // return new array

// New Object Methods
var person = {
    name: "Zayaan",
    age: 0.8,
    toString: function (){
        return 'Name ' + this.name + ' ' + 'Age' + ' ' +  this.age
    }
}

console.log(person.toString())

// Working with dates
var date = new Date();
console.log(date.getFullYear())
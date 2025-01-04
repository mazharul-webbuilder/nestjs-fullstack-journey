// Released 2003

// Arrow Function
const greet = (name) => `Hello ${name}`
console.log(greet('Zayaan'))

const sonInfo = (name, age) => `Name ${name} Age ${age}`
console.log(sonInfo('Zayaan', 0.8))

// Promises
const fetchData = new Promise((resolve, reject) => {
    let success = true
    if (success){
        resolve('Data fetched successfully')
    }else {
        reject('Error Data fetching')
    }
})

fetchData.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// Let and const
let number = 0.8
const sonName = 'Zayaan'

// Destructing Assignment
const sonObj = {
    name: 'Zayaan',
    age: 0.8
}

const {name, age} = sonObj
console.log(name)
console.log(age)

const sonArray = ['Zayaan', 0.8, 2024]
const [sonNameFromArray, sonAgeFromArray] = sonArray

console.log(sonNameFromArray)

// Default Parameter
function babyName(name = 'Zayaan'){
    return name;
}
console.log(babyName('Ayaan'))

// Modules
import { greetNew } from './module/greet.js';

console.log(greetNew('Zayaan Baby'))

// Spread Operator
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 5, 6]

const obj1 = {name: "Alice", age: 25}
const obj2 = {...obj1, city: 'Dhaka'}
console.log(obj2)

// For of Loop
const numbers = [1, 3, 4, 5]
for (const num of numbers){
    console.log(num)
}

// Map and Set
const map = new Map()
map.set('name', 'Zayaan')
map.set('age', 0.8)
console.log(map.get('name'))

// Object Assign
const ObjA = {name: 'Alice'}
const ObjB = {age: 25}
const mergeObj = Object.assign({}, ObjA, ObjB)
console.log(mergeObj)

// Number Methods
console.log(Number.isFinite(42))
console.log(Number.isNaN(NaN))

// Symbol
const uniqueId = Symbol('id')
console.log(uniqueId)
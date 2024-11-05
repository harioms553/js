/*
Primitive:
7 types:

String
Number
Boolean
null
undefined
symbol
BigInt

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber =4357043440953009n
console.log(typeof bigNumber)

/* 

Reference (Non Primitive)

Array
Objects
Functions


1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       
*/

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
   name: "hariom",
   age: 22,
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof myFunction)
console.log(typeof anotherId)
let score = 33
let score1 = "33"
let score2 = "33ab"

// const {score} = req.body; don't know the datatype

// console.log(typeof score);
// console.log(typeof (score1));
// The input from the frontend can be int or string, as mentioned in 1 & 2 lines

// Class based function to convert string into number
let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber);
// console.log(typeof valueInNumber1);

// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);
// NaN meaans not a number

let score3 = null
let score4 = undefined

let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)
// console.log(valueInNumber3);
// console.log(valueInNumber4);

/*
    "33" = 33
    "33ab" = NaN
    true = 1
    false = 0
    "aashu" = NaN
*/

// let isLoggedIn = 0
// let isLoggedIn = ""
let isLoggedIn = "aashu"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*
    1 = true
    0 = false
    "" = false
    "a" = true
*/

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

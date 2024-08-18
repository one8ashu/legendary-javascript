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
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ----------------------Operations-----------------------------

let value = 3
let negValue = -value

// console.log(negValue);
// console.log(2**2);

let str1 = "Jai"
let str2 = " Hind"
let str3 = str1 + str2

// console.log(str3);

// console.log(1 + 2);
// console.log("1" + 2);
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// https://tc39.es/ecma262/#sec-toprimitive

// Operator precedence

// console.log(true);
// console.log(+true);
// console.log(+"");

let num1, num2, num3

// num1 = num2 = num3 = 2

let gameCounter = 9
gameCounter++;  // prefix and postfix operator (js mdn)
console.log(gameCounter);

// study link
/*
    https://tc39.es/ecma262/multipage/abstract-operations.
    html#sec-type-conversion
*/
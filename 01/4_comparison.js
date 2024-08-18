// console.log(2>1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);  // false
// console.log(null == 0);  // false
// console.log(null >= 0);  // true
/*
    The reasom is that an equality check == and comparisons >, <, >=, <= works differently.
    Comparions convert null to a number, treating it as 0.
    i.e. null >= 0 is true and null > 0 is false.
 */

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// Strict check "==="
console.log("2" == 2);
console.log("2" === 2);
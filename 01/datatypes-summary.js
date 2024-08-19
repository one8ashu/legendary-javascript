/*
    2 types of datatypes:
        1. Primitive datatypes: 7 types
            a. String
            b. Number
            c. Boolean
            d. Null
            e. Undefined
            f. Symbol
            g. BigInt

    const score = 108;                  integer datatype
    const scoreValue = 100;             integer datatype
    const isLoggedIn = true;            boolean datatype
    const outsideTemperature = null;    null datatype
    let userEmail;                      undefined datatype
    let userEmail = undefined;          undefined datatype
    const id = Symbol('123');           symbols used in react
    const anotherId = Symbol('123');
    
    console.log(id === anotherId);

    const bigNumber = 4454525474531234531n;
    // without n at the last, it is int otherwise bigint
    

        2. Non-primitive datatypes/ reference types
            a. Array
            b. Objects
            c. Functions

        const heros = ["captain america", "iron man"]   // array
        let myObject = {
            name: "aashu",  // objects, any datatypes
            age: "21",
        }
        const myFunction = function(){
            console.log("Jai Hind");    // functions
        }

        // Finding datatype of variable
        console.log(typeof BigInt);
        // https://tc39.es/ecma262/#sec-typeof-operator

        console.log(typeof heros);
        console.log(typeof myFunction);
        console.log(typeof id);                


    To master JS, do JAVASCRIPT OBJECTS and BROWSER WEB EVENTS.
    JS is statically or dynamically typed language?
*/
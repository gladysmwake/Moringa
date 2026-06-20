/* 
 Only evaluate if somethings true/false

 types: equality ==
        strict equality===(reccomended to use)
        inequality !=
        strict inequality !==(reccomended to use)
*/



let numb1="23";
let numb2=23;

//string shouldnt equal a number
//strict equality is for same value same data type...like it checks for this
//non strict equality is for same value but not same data type...like it checks for this

let strictEquality = numb1 === numb2; //typeOf will be Boolean
console.log(numb1 + " === " + numb2 + " : " + strictEquality);
console.log("Type of strictEquality: " + typeof strictEquality);

let nonStrictEquality = numb1 == numb2; //typeOf will be Boolean
console.log(numb1 + " == " + numb2 + " : " + nonStrictEquality);
console.log("Type of nonStrictEquality: " + typeof nonStrictEquality);



let val1="hello";
let val2="HOw are you";

let strictInequality = val1 !== val2; //typeOf will be Boolean
console.log(val1 + " !== " + val2 + " : " + strictInequality);
console.log("Type of strictInequality: " + typeof strictInequality);

let Inequality = val1 != val2; //typeOf will be Boolean
console.log(val1 + " != " + val2 + " : " + Inequality);
console.log("Type of Inequality: " + typeof Inequality);

let nonstrictInequality = val1 != val2; //typeOf will be Boolean
console.log(val1 + " != " + val2 + " : " + nonstrictInequality);
console.log("Type of nonstrictInequality: " + typeof nonstrictInequality);

let strictInequality2 = val1 !== val2; //typeOf will be Boolean
console.log(val1 + " !== " + val2 + " : " + strictInequality2);
console.log("Type of strictInequality2: " + typeof strictInequality2);








/* 
    
This code explores how JavaScript compares values. Let me break it down section by section.

The Core Idea
When you compare two values, JavaScript returns a boolean — either true or false. The difference between the operators is how strictly they compare.

Part 1 — Equality (== vs ===)
javascriptlet numb1 = "23";  // string
let numb2 = 23;    // number
OperatorNameChecksResult===Strict equalitySame value AND same typefalse (string ≠ number)==Loose equalitySame value onlytrue ("23" gets converted to 23)
The key difference: == does type coercion — it secretly converts one value to match the other's type before comparing. === never does this, which is why it's recommended.

Part 2 — Inequality (!= vs !==)
javascriptlet val1 = "hello";
let val2 = "HOw are you";
These are just the opposites of the equality operators — they check if things are not equal.
OperatorNameResult here!==Strict inequalitytrue (values differ)!=Loose inequalitytrue (values differ)




*/


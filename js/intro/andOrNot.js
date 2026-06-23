/*
    Comparison operators:

    And--> &&
    truth table:
    true && true = true
    true && false = false
    false && true = false
    false && false = false

    Or --> ||
    truth table:
    true || true = true
    true || false = true
    false || true = true
    false || false = false

    Not --> ! (return the opposite of the value)
    truth table:
    !true = false
    !false = true

*/

let val1=true;
let val2=false;

console.log(`val1=${val1} and val2=${val2} is ${val1 && val2}`);


let xoxo_age=15;
let cutie_age=20;

console.log(`xoxo_age=${xoxo_age} and cutie_age=${cutie_age} is ${xoxo_age && cutie_age}`);
console.log(`xoxo_age=${xoxo_age} or cutie_age=${cutie_age} is ${xoxo_age || cutie_age}`);
console.log(`not xoxo_age=${xoxo_age} is ${!xoxo_age}`);


/*
    In JavaScript, numbers are truthy (non-zero) or falsy (zero). 
    The logical operators don't return true/false — they return one of the actual values:
        
    Key Concept: Short-Circuit Evaluation

&& — returns the first falsy(zero) value, or the last value if all are truthy(none zero)
|| — returns the first truthy(none zero) value, or the last value if all are falsy(zero)
! — always returns a pure boolean (true or false)


*/


let val3=true;
let val4=true;
let result1=val3&&val4;

console.log(`val3=${val3} val4=${val4} val3&&val4=${val3&&val4} `);

let mercy_age=15;
let mercy_balance=50000;

//if mercys age is greater than 18 and hasmore than 20k in her account, she can buy a car
let is_greater_than_18=mercy_age>18;
let has_more_than_20k=mercy_balance>20000;

console.log(`Mercy has more than 20k ${has_more_than_20k} `);
console.log(`Mercys age is greater than 18 and has more than 20k in her account ${is_greater_than_18&&has_more_than_20k}`);


let canBuyCar=mercy_age>18 && mercy_balance>20000;
console.log(`Mercy can buy a car ${canBuyCar}`);


let simplified=mercy_age<18 && mercy_balance>2000;
console.log(`simplified ${simplified}`)
console.log(`Mercy can buy a car ${simplified}`);

console.log(`Mercys age is greater than 18 or she has more than 20k in her account ${is_greater_than_18||has_more_than_20k}`);


/*
    Or ...atleast one statement has to be true for the whole statement to be true
*/

console.log(`This is not true =${!true}`);
console.log(`This is not false =${!false}`);
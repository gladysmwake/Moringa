/*
    Conditional Statements
Conditional Statements allow us to perform different actions for different conditions.

Conditional statements run different code depending on true or false conditions.

Conditional statements include:

if    (Use if to specify a code block to be executed, if a specified condition is true)
if...else  (Use else to specify a code block to be executed, if the same condition is false)
if...else if...else (Use else if to specify a new condition to test, if the first condition is false)
switch     (Use switch to specify many alternative code blocks to be executed)
ternary (? :)     (Use (? :) (ternary) as a shorthand for if...else
)


*/



//if
//Senario 1
let numb10 = 36;
let numb21=0;

if(numb10=36){
    console.log(`Senario 1 ran!`);

}

//Senario 2
if (numb21=0){
    console.log(`Senario 2 ran!`);
}

//Senario 3
if (numb10===36){
    console.log(`Senario 3 ran!`);
}

//Senario 4
if (numb21===numb10){
    console.log(`Senario 4 ran!`);
}


//Senario 5
if (numb10>numb21){
    console.log(`Senario 5 ran!`);
}

//Senario 6
if(numb10<numb21){
    console.log(`Senario 6 ran!`);
}





//if....else

    let isRaining = true;

if (isRaining) {
    console.log("bring an umbrella! ☂️");
} else {
    console.log("leave it at home!");
}

// Output: "bring an umbrella! ☂️"


//if...else if....else
    let weather = "sunny";

if (weather === "raining") {
    console.log("bring an umbrella! ☂️");
} else if (weather === "cold") {
    console.log("wear a jacket! 🧥");
} else if (weather === "sunny") {
    console.log("wear sunscreen! ☀️");
} else {
    console.log("check the forecast!");
}

// Output: "wear sunscreen! ☀️"


//switch statement  (Best when checking one variable against many values.)
let day = "Monday";

switch(day) {
    case "Monday":
        console.log("start of the week 😩");
        break;
    case "Friday":
        console.log("almost weekend! 🙌");
        break;
    case "Saturday":
    case "Sunday":
        console.log("weekend! 🎉");
        break;
    default:
        console.log("midweek grind 💪");
}

// Output: "start of the week 😩"


//Ternary Operator
//A shorthand for simple if/else — written in one line.
// syntax: condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// same as writing:
if (age >= 18) {
    status = "adult";
} else {
    status = "minor";
}





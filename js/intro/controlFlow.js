/*
 Control flow is simply the order in which your code runs.
Think of it like a flowchart — your code makes decisions and takes different paths. 

Types of control flows:
    Sequential (Code runs line by line,top to bottom)
    Conditional (Code takes diffrent pathes based on conditions)
    Loops-Repetion  (Code repeats until a condition is met)
*/

//Sequential
let name = "xoxo";       // step 1
let age = 15;            // step 2
console.log(name, age);  // step 3

//Conditional
let age = 15;

if (age >= 18) {
    console.log("you can vote! 🗳️");  // path A
} else {
    console.log("too young to vote!"); // path B
}
// only ONE path runs

//Loops
let count = 1;

while (count <= 3) {
    console.log(`repeating... ${count}`); // keeps looping
    count++;
}
console.log("done!"); // continues after loop
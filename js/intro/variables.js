/*
    There are 3 ways to declare variables in JavaScript:
1. var: This is the traditional way to declare variables. Variables declared with var are function-scoped and can be re-declared and updated.

2. let: This is a newer way to declare variables introduced in ES6 (ECMAScript 2015). Variables declared with let are block-scoped, which means they are only accessible within the block they are defined in. They can be updated but not re-declared within the same scope.

3. const: This is also introduced in ES6 and is used to declare constants. Variables declared with const are block-scoped and cannot be updated or re-declared. They must be initialized at the time of declaration.

In this code, we will explore how to declare variables using these three keywords and understand their differences.
*/

var name = "Alice";
let age = 30;
const country = "USA";

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Country: " + country);

// Updating variables
name = "Bob"; // var can be updated
age = 31; // let can be updated
// country = "Canada"; // const cannot be updated, this will throw an error

console.log("Updated Name: " + name);
console.log("Updated Age: " + age);
// console.log("Updated Country: " + country); // This line will not execute due to the error above

// Re-declaring variables
var name = "Charlie"; // var can be re-declared
// let age = 32; // let cannot be re-declared, this will throw an error......it can only be updated
// const country = "UK"; // const cannot be re-declared, this will throw an error

console.log("Re-declared Name: " + name);
// console.log("Re-declared Age: " + age); // This line will not execute due to the error above
// console.log("Re-declared Country: " + country); // This line will not execute due to the error above



/*    In summary:
- var is function-scoped, can be updated and re-declared.(BUT NOT RECOMMENDED TO USE VAR BECAUSE IT CAN LEAD TO UNINTENDED CONSEQUENCES DUE TO ITS FUNCTION-SCOPED NATURE)
- let is block-scoped, can be updated but not re-declared within the same scope.
- const is block-scoped, cannot be updated or re-declared, and must be initialized at the time of declaration.
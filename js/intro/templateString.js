let firstName="Xoxo"
let secondName="Cutie"
let age=15;
let address="Nairobi";

let userDetails=firstName+" "+secondName+" "+age+" "+address;
console.log(userDetails);
console.log("user details is", typeof userDetails);


let userDetails2=`${firstName} ${secondName} is ${age} ${address}`;
console.log(userDetails2);
console.log(`${firstName} ${secondName} is ${age} ${address}`);


/*

A template string is just a fancy way to write text in JavaScript.
It does the same thing as a regular string — holds text — but it makes it easier to mix in variables or expressions without breaking everything apart with + signs.

Think of it like a fill-in-the-blank sentence:

"Hello, my name is ___ and I am ___ years old."

In JavaScript with a template string:
let name = "Alice";
let age = 30;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;

The ${} syntax allows you to insert variables or even expressions directly into the string without needing to concatenate with + signs. It makes your code cleaner and easier to read!
*/
function areaCircle(r){
    return Math.PI * r * r;
}//This is a named function

let age = 21;
let pookiesAge = age;
console.log(pookiesAge);

let ac = areaCircle;
console.log(ac);
ac(20);











/* ============================
   EXERCISE 1
   Named function → variable → anonymous function
   ============================ */

// Step 1 & 2: named function assigned to a variable
function test() {
  console.log("Hello from test!");
}

let myVar = test;

// Step 3: variable directly equals the function definition
myVar = function test() {
  console.log("Hello from test!");
};

// Step 4 & 5: call the variable and the original name
myVar(); // ✅ works
// test(); // ❌ would throw ReferenceError: test is not defined (uncomment to see)

// Step 6 & 7: remove the name → anonymous function
myVar = function () {
  console.log("Hello from test!");
};

myVar(); // ✅ still works, same result


/* ============================
   EXERCISE 2
   Function that prints the current time
   ============================ */

function showCurrentTime() {
  const currentTime = new Date();
  console.log(`Current time is: ${currentTime}`);
}

showCurrentTime();


/* ============================
   EXERCISE 3
   Named, anonymous, and arrow functions
   ============================ */

// 1. Named function (declaration) — hoisted
function greet() {
  console.log("Hi there!");
}
greet();

// 2. Anonymous function (expression) — NOT hoisted
const greet2 = function () {
  console.log("Hi there, from anonymous!");
};
greet2();

// 3. Arrow function — NOT hoisted
const greet3 = () => {
  console.log("Hi there, from arrow!");
};
greet3();

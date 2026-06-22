let a = 10;
let b = 3;

console.log(a + b);  // 13  — addition
console.log(a - b);  // 7   — subtraction
console.log(a * b);  // 30  — multiplication
console.log(a / b);  // 3.333... — division
console.log(a % b);  // 1   — modulus (remainder)
console.log(a ** b); // 1000 — exponentiation (10 to the power of 3)


//Assignment Operators
//Shorthand for updating a variables value

let score = 10;

score += 5;  // same as score = score + 5  → 15
score -= 3;  // same as score = score - 3  → 12
score *= 2;  // same as score = score * 2  → 24
score /= 4;  // same as score = score / 4  → 6
score %= 4;  // same as score = score % 4  → 2
score **= 3; // same as score = score ** 3 → 8


//Increment and Decrement
let count = 5;

count++;  // adds 1 → 6  (post-increment)
count--;  // subtracts 1 → 5  (post-decrement)
++count;  // adds 1 → 6  (pre-increment)
--count;  // subtracts 1 → 5  (pre-decrement)



//Post vs Pre increment
let x = 5;
console.log(x++); // prints 5 THEN increments → x is now 6
console.log(++x); // increments FIRST then prints → prints 7
/*
   There are exactly 7 falsy values in JavaScript:
        false        // boolean false
        0            // the number zero
        -0           // negative zero
        0n           // BigInt zero
        ""           // empty string ('' or `` also)
        null
        undefined
        NaN (Not a Number)

Truthy
        "0"          // ✅ truthy — non-empty string, even if it's "0"
        "false"      // ✅ truthy — still a non-empty string
        []           // ✅ truthy — empty array
        {}           // ✅ truthy — empty object
        function(){} // ✅ truthy — any function
        -1           // ✅ truthy — any non-zero number
        Infinity     // ✅ truthy




What is "truthy" and "falsy"?
In JavaScript, sometimes the code needs to make a yes or no decision. Like:

if (something) {
  // do this
}

JS looks at something and asks: "is this true or false?"
But something doesn't have to be an actual true or false boolean — it can be anything: a number, a string, null, whatever.
So JavaScript has a rule:
Every value in JS is secretly either truthy (acts like true) or falsy (acts like false).







*/










let userName1="John Mwangi"
let userName2=0//falsey

let activeUserName=userName2||userName1

console.log(activeUserName)

let bothUserNameOk=userName1&&userName2
console.log(bothUserNameOk)



//Example in conditional situations

let name = "Maria";

if (name) {
  console.log("Hello, " + name);
}

/*
    What happens here?
JS looks at name and asks: "is this truthy or falsy?"
"Maria" is a non-empty string — it's not in the falsy list, so it's truthy.
So the if block runs, and we get:
Hello, Maria


*/

//Now let's change it to an empty string:
let name = "";

if (name) {
  console.log("Hello, " + name);
} else {
  console.log("No name given!");
}

/*
"" is an empty string — that is in the falsy list, so it's falsy.
The if block is skipped, and we get:
No name given!

*/



//Okay! Numbers are really interesting. Let's look at this:

let score = 10;

if (score) {
  console.log("You have a score!");
} else {
  console.log("No score yet.");
}

/*
    10 is not in the falsy list, so it's truthy.
We get:
You have a score!

*/

//Now let's change the score to 0:
let score = 0;

if (score) {
  console.log("You have a score!");
} else {
  console.log("No score yet.");
}

/**
 0 is in the falsy list, so it's falsy.
We get:
No score yet.
 */


//NOTE

/*
    ⚠️ Here's the tricky part
What if the player actually has a score of 0? Like they just started the game?
JS still says "0 is falsy" and prints "No score yet." — which is wrong! The player does have a score, it's just 0.
This is a common bug in JavaScript. 😅
The fix is to be more specific in your check:

*/

let score = 0;

if (score !== null && score !== undefined) {
  console.log("You have a score!"); // this runs correctly ✅
} else {
  console.log("No score yet.");
}

//Now we're saying: "only skip it if there's truly NO score", not just because it's 0.






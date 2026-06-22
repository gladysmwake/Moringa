/*
    Loops are handy, if you want to run the same code over and over again, each time with a different value.

    Types of loops:
    While (Runs while a condition is true. Best when you don't know how many times you need to loop.)
    Do....while (The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.)
    for  (Best when you know exactly how many times to loop.)
    for....of   (The Big Idea
                Think of it like going through a list of items one by one.
                Real life example: You have a shopping list. You go through each item, one at a time, and put it in your cart.)


   for....in (similar to for...of but this returns the index of an item in the list its in)             
*/



//While loop

let count = 1;

while (count <= 5) {
    console.log(`count is ${count}`);
    count++;
}

// Output:
// count is 1
// count is 2
// count is 3
// count is 4
// count is 5


//Do...while
let count = 1;

do {
    console.log(`count is ${count}`);
    count++;
} while (count <= 5);



/*for
    It has 3 parts inside the parentheses:
    for (start; condition; update) {
    // code to repeat
                    }

*/
for (let i = 1; i <= 5; i++) {
    console.log(`count is ${i}`);
}




/*for...of
        syntax    
            for (let item of collection) {
    // do something with each item
                        }

Part          What it means       
item          the current youre looking at
collection    the list youre looping through
*/

let friends = ["xoxo", "cutie", "bestie"];

for (let friend of friends) {
    console.log(`Hey ${friend}!`);
}

// Output:
// Hey xoxo!
// Hey cutie!
// Hey bestie!

let scores = [85, 92, 78, 95, 88];

for (let score of scores) {
    if (score >= 90) {
        console.log(`${score} — excellent! 🌟`);
    } else {
        console.log(`${score} — good job! 👍`);
    }
}

// Output:
// 85 — good job! 👍
// 92 — excellent! 🌟
// 78 — good job! 👍
// 95 — excellent! 🌟
// 88 — good job! 👍

let name = "xoxo";

for (let letter of name) {
    console.log(letter);
}

// Output:
// x
// o
// x
// o


//for...in
let fruits = ["apple", "banana", "mango"];

// for...of — gives you the VALUES ✅
for (let fruit of fruits) {
    console.log(fruit); // apple, banana, mango
}

// for...in — gives you the INDEXES ⚠️
for (let index in fruits) {
    console.log(index); // 0, 1, 2
}


//break (the code will execute and print the values until the condition is met...then it stops executing)
let foods = ["pizza", "salad", "burger", "tacos", "pasta"];

for (let food of foods) {
    if (food === "burger") {
        console.log("found my burger! stopping! 🍔");
        break;
    }
    console.log(`skipping ${food}...`);
}

// Output:
// skipping pizza...
// skipping salad...
// found my burger! stopping! 🍔


//switch(Best when you have one variable with many possible values)
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("start of the week 😩");
        break;
    case "Tuesday":
        console.log("still early 😴");
        break;
    case "Wednesday":
        console.log("halfway there! 😅");
        break;
    case "Thursday":
        console.log("almost Friday! 😬");
        break;
    case "Friday":
        console.log("lets gooo! 🙌");
        break;
    case "Saturday":
    case "Sunday":
        console.log("weekend! 🎉");
        break;
    default:
        console.log("that's not a real day!");
}

// Output: "start of the week 😩"

/*
    Part              What it does          
    switch(day)       the value you're checking
    case "Monday"     a possible match to check against
    break             stops and exits the switch
    default           runs if nothing matches

    */

/*
    ⚠️ What Happens Without break
This is called fall through — it keeps running into the next case!

*/


/*
Intentional Fall Through
Sometimes fall through is actually useful — like when multiple cases do the same thing:

*/
let day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("its a weekday 😩");
        break;
    case "Saturday":
    case "Sunday":
        console.log("its the weekend! 🎉");
        break;
}

// Output: "its the weekend! 🎉"

//Continue
/*
 continue — Skip and Keep Going
Unlike break which stops the loop completely, continue just skips the current step and moves to the next one.

Real life example: You're going through your playlist and you skip a song you don't like — but you keep listening to the rest.   

*/
let songs = ["song1", "song2", "song3", "song4", "song5"];

for (let song of songs) {
    if (song === "song3") {
        console.log("skipping song3! 🚫");
        continue; // skip this one, keep going
    }
    console.log(`now playing ${song} 🎵`);
}

// Output:
// now playing song1 🎵
// now playing song2 🎵
// skipping song3! 🚫
// now playing song4 🎵
// now playing song5 🎵







/*
    Step 1 — What Even IS a Function?
Imagine you have a robot 🤖. You can give it a set of instructions and name those instructions. Whenever you call that name, the robot follows those instructions.

function makeTea() {
  console.log("Boil water.");
  console.log("Add tea bag.");
  console.log("Pour into cup.");
}


That's a function. Just a named set of instructions.
Now to actually run it, you call it by writing its name with ():
makeTea(); // the robot follows the instructions


*/






function morningRoutine() {
  console.log(`brush teeth`);
  console.log(`breakfast`);
  console.log(`bathe`);
}

morningRoutine();


//PARAMETERS
/*
    Step 2 — Parameters (Giving Your Function Inputs)
Right now your function always does the same exact thing every time. But what if you want it to be flexible?
That's where parameters come in. They're like blank slots you fill in when you call the function.

Think of it like a coffee order ☕:
        function orderCoffee(size) {
            console.log(`One ${size} coffee please!`);
        }
        
//size is the blank slot. You fill it in when you call it:
orderCoffee("small");  // "One small coffee please!"
orderCoffee("large");  // "One large coffee please!"

//Same function, different result depending on what you pass in.

You can have multiple parameters too:
javascript
function orderCoffee(size, type) {
  console.log(`One ${size} ${type} coffee please!`);
}

orderCoffee("large", "iced"); // "One large iced coffee please!"




 */

//Exercise....
/*
    Write a function called greetFriend that takes a name as a parameter and prints:

"Hey [name], good to see you!"

Then call it twice with two different names.

*/

function greetfriend(name){
    console.log(`Hey ${name}, good to see you`);

}
greetfreind(`XOXO`);
greetfriend(`Cutie`);


//EXERCISE2
/*
    Exercise — Multiple Parameters 💪
Write a function called introduce that takes two parameters — name and age — and prints:

"Hi, my name is [name] and I am [age] years old."

Then call it 3 times with different names and ages.


*/

function introduce(name,age){
    console.log(`Hi, my name is ${name} and i am ${age} years old`);
}
introduce(`XOXO`,`21`);
introduce(`cutie`,`22`);
introduce(`Shawdy`,`31`);


function multiply(a,b){
    return a*b;
}
const result =multiply(6,10);
console.log(result);


/*
    Mini Challenge 🔥
Write a function called calcBill that takes price and tip as parameters and returns the total bill (price + tip). Then print:

"Your total bill is [result]"


*/

function calcBill(price,tip){
    return price+tip;

}
const result =calcBill(1500,1400);
console.log(`Your total bill is ${result}`);
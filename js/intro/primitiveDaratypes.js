/*
    There are 7 types of primitive data types in JavaScript:
1. String: Represents a sequence of characters enclosed in single quotes, double
2. Number: Represents both integer and floating-point numbers.
3. Boolean: Represents a logical value that can be either true or false.
4. Null: Represents the intentional absence of any object value.
5. Undefined: Represents a variable that has been declared but has not been assigned a value.
6. Symbol: Represents a unique and immutable value, often used as object property keys.
7. BigInt: Represents integers with arbitrary precision, allowing for very large numbers.


*/


//Numbers
let number1=34;
console.log(number1)
let number2=20.36;
console.log(number2)
let number3="58.6";
let sum=number1+number2-number3;
console.log(sum)

//strings
let str1="Double \n quote I am XOXO";
console.log(str1)
let str2='Single Quote I am XOXO';
console.log(str2)
let str3=`Backticks I am XOXO`;
console.log(str3)

let str4="23.5";
console.log("23.5 is a string Dont")
let str5='XOXO said "23.5 is a number"';
let str6=`
Multi line string
Multi line strings
''  "" both single and double quotes
Dont
'' `;

//boolean 

let xoxoiscute=true;
console.log(`xoxo is cute ${xoxoiscute}`);

let xoxoisMarried=false;
console.log(`xoxo is Married ${xoxoisMarried}`);

/*Null-> lack of a value
i.e absense of a value
*/
let user = null;


//undefined (a variable that has been declared but not assigned a value)
let score;
console.log(score);//undefined

//symbol (a unique and immutable value, often used as object keys)
let id = Symbol("id")

//BigInt
let bigNum = 789969503949504061n;

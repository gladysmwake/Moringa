let numb7=30
let numb8=10

let divNumb= numb7/numb8; 
console.log(`divNumb is ${divNumb} its type is ${typeof divNumb}`);

//modulus is somehow special...becuase it returns the remainder of a division operation. It can be used to determine if a number is even or odd, among other things.

let numb9=23
let numb10=12

let modNu=numb9%numb10;
console.log(`modNu is ${modNu} its type is ${typeof modNu}`);

//exponentiation operator(**) is used to raise a number to the power of another number. It can be used for calculations involving powers and roots.
let numb11=5
let numb12=3

let expNumb=numb11**numb12;
console.log(`expNumb is ${expNumb} its type is ${typeof expNumb}`);

let numb13=16
console.log(`numb13 is ${numb13} its type is ${typeof numb13}`);

let strNumb="345"
console.log(`strNumb is ${strNumb} its type is ${typeof strNumb}`);

let nullValue=null
console.log(`nullValue is ${nullValue} its type is ${typeof nullValue}`);

let undefinedValue;
console.log(`undefinedValue is ${undefinedValue} its type is ${typeof undefinedValue}`);

let boolValue=true
console.log(`boolValue is ${boolValue} its type is ${typeof boolValue}`);

let objValue={name:"XOXO", age: 30}
console.log(`objValue is ${objValue} its type is ${typeof objValue}`);

let arrValue=[1,2,3,4,5]
console.log(`arrValue is ${arrValue} its type is ${typeof arrValue}`);

let funcValue=function(){ return "Hello, World!"}
console.log(`funcValue is ${funcValue} its type is ${typeof funcValue}`);



/*

## `null` vs `undefined`

### You Set `null`
It means you **deliberately** told the variable "you have no value right now":
```javascript
let age = null;  // you chose this
```
Think of it like an empty box — you know the box exists, you just chose to leave it empty on purpose. For example:
```javascript
let userLoggedIn = null;  // no user yet, but we'll assign one later
```

---

### JavaScript Sets `undefined`
It means a variable was **declared but you forgot to give it a value** — JS fills it with `undefined` automatically:
```javascript
let name;  // you never assigned anything
console.log(name);  // undefined — JS did this, not you
```
Think of it like a box that doesn't even have anything in it yet — you created the box but never put anything inside.

---

### The Simple Difference
```javascript
let a = null;      // you said "empty on purpose"
let b;             // js said "you forgot something"
```

---

## Objects

An object stores **related information together** using key-value pairs:
```javascript
let person = { name: "XOXO", age: 30 };
//             key    value  key   value
```
Instead of doing this:
```javascript
let personName = "XOXO";
let personAge = 30;
```
You group everything neatly into one place. You access values like this:
```javascript
person.name  // "XOXO"
person.age   // 30
```
A real world way to think about it — an object is like a **form** with fields:
```javascript
let user = {
    username: "coolkid99",
    email: "cool@gmail.com",
    isLoggedIn: true,
    age: 17
}
```
Everything about that one user lives in one place.

---

## Functions

A function is a **reusable block of code** you write once and run whenever you need it:
```javascript
let funcValue = function() { return "Hello, World!" }
```
Without functions you'd have to repeat yourself:
```javascript
// without a function 😫
console.log(5 * 5);
console.log(10 * 10);
console.log(3 * 3);

// with a function ✅
function square(number) {
    return number * number;
}

console.log(square(5));   // 25
console.log(square(10));  // 100
console.log(square(3));   // 9
```
The `return` keyword sends a value **back out** of the function so you can use it elsewhere:
```javascript
let result = square(5);
console.log(result);  // 25
```

---

### Functions + Objects Together
Objects can even store functions inside them, which are then called **methods**:
```javascript
let person = {
    name: "XOXO",
    age: 30,
    greet: function() {
        return "Hi, my name is " + person.name;
    }
}

person.greet()  // "Hi, my name is XOXO"
```
This is actually how most real JavaScript code is written — objects holding data and functions together.

*/


const bonus="200"
const sallary=50000;

const sallaryGross=bonus+sallary;

console.log("Gross sallary is ",sallaryGross);

const paye= sallaryGross*0.16;
console.log("for gross sallary of ", sallaryGross, "Paye is ",paye);

const nhif=2500
console.log("Nhif deduction " ,nhif)

const sha=2500
console.log("Sha is ", sha)

const toatalDeduction=paye+nhif+sha;
console.log("Total deduction is ", toatalDeduction)

const sallaryNet=sallaryGross-toatalDeduction;
console.log("Net sallary is ", sallaryNet)
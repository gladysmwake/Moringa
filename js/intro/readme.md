readme
readme




----------

# JavaScript Variables 

## 1. What Are JavaScript Variables?

A **variable** in JavaScript is like a container used to store data that can be used and changed in a program. It helps us keep and reuse information instead of rewriting it again and again.

### Real-life example:

Think of a **phone contact list**:

-   A name (like “Mom”) is stored with a phone number.
    
-   You don’t need to remember the number every time, you just use the name.
    

In JavaScript:

```javascript
let name = "Gladys";

```

Here, `name` stores the value `"Gladys"`.

----------

## 2. How Do You Declare Variables in JavaScript?

JavaScript uses keywords like `let`, `const`, and `var` to declare variables.

### let

Used when the value can change later.

```javascript
let age = 20;
age = 21;

```

### const

Used when the value should NOT change.

```javascript
const country = "Kenya";

```

### var (older method)

Still works but not commonly used in modern JavaScript.

```javascript
var city = "Nairobi";

```

----------

## 3. Rules for Naming Variables

When naming variables in JavaScript:

-   You can use letters, numbers, underscores (_), and dollar signs ($)
    
-   Variable names **cannot start with a number**
    
-   Spaces are **not allowed**
    
-   JavaScript keywords (like `let`, `const`, `if`) cannot be used
    
-   Variable names are **case-sensitive**
    

### Valid variable names:

```javascript
let studentName;
let age20;
let _score;

```

### Invalid variable names:

```javascript
let 1name;      // starts with number
let student name; // contains space
let let;        // keyword used as name

```

----------

## 4. Variable Naming Styles

### Camel Case

Words are joined, and each new word starts with a capital letter (except the first one).

**Examples:**

```javascript
firstName;
studentAge;

```

**Common use:**

-   JavaScript variables and functions
    

----------

### Pascal Case

Every word starts with a capital letter.

**Examples:**

```javascript
FirstName;
StudentAge;

```

**Common use:**

-   Classes in JavaScript
    

----------

### Snake Case

Words are separated using underscores (_).

**Examples:**

```javascript
first_name;
student_age;

```

**Common use:**

-   Databases and some backend systems
    

----------

## 5. Summary

JavaScript variables are used to store and manage data in a program. They can be declared using `let`, `const`, or `var`, depending on whether the value should change or stay constant. Naming variables follows specific rules to ensure clarity and avoid errors. Different naming styles like camel case, pascal case, and snake case help developers write clean and readable code depending on the situation.

----------






JavaScript Variables
1. What Are JavaScript Variables?
A variable in JavaScript is like a container used to store data that can be used and changed in a program. It helps us keep and reuse information instead of rewriting it again and again.

Real-life example:
Think of a phone contact list:

A name (like “Mom”) is stored with a phone number.

You don’t need to remember the number every time, you just use the name.


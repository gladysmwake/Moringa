# Python Control & Conditional Statements — Practice Set

Everything ordered logically: conditionals first, then loops, then loop-control
statements, then combined/advanced structures. Each topic has 3 exercises —
Beginner → Intermediate → Expert.

---

## 1. `if / elif / else` (Conditional Statements)

**What it does:** Runs a block of code only if a condition is `True`. `elif`
checks another condition if the first was `False`. `else` catches everything
that didn't match.

### Exercises
1. **Beginner** — Write a program that asks for a number and prints
   `"Positive"`, `"Negative"`, or `"Zero"`.
2. **Intermediate** — Write a program that takes an exam score (0–100) and
   prints a letter grade: A (90+), B (80–89), C (70–79), D (60–69), F (below 60).
3. **Expert** — Write a program that classifies a triangle given three side
   lengths: `"Not a triangle"` (if the sides can't form one), `"Equilateral"`,
   `"Isosceles"`, or `"Scalene"`. You'll need nested/combined conditions.

---

## 2. `while` Loop

**What it does:** Repeats a block of code *as long as* a condition stays
`True`. Good for when you don't know in advance how many times you'll loop.

### Exercises
1. **Beginner** — Print numbers from 1 to 10 using a `while` loop.
2. **Intermediate** — Write a number-guessing game: the program picks a
   random number between 1–50, and the user keeps guessing until they get it
   right, with `"Too high"` / `"Too low"` hints.
3. **Expert** — Implement the **Collatz conjecture**: given a starting number,
   repeatedly apply "if even, divide by 2; if odd, multiply by 3 and add 1"
   until you reach 1. Print each step and count how many steps it took.

---

## 3. `for` Loop

**What it does:** Iterates over a sequence (list, string, `range()`, etc.),
running the block once per item.

### Exercises
1. **Beginner** — Use a `for` loop with `range()` to print all even numbers
   from 0 to 20.
2. **Intermediate** — Given a list of words, use a `for` loop to build and
   print a new list containing only words longer than 4 letters.
3. **Expert** — Print a multiplication table (1–12) as a formatted grid using
   nested `for` loops — output should line up in neat columns.

---

## 4. `break`, `continue`, `pass`

**What they do:** `break` exits a loop early. `continue` skips to the next
iteration without finishing the current one. `pass` does nothing — it's a
placeholder where Python syntactically requires a statement.

### Exercises
1. **Beginner** — Loop through numbers 1–20, but stop (`break`) as soon as
   you hit a number divisible by 7.
2. **Intermediate** — Loop through a list of usernames and skip (`continue`)
   any that start with `"admin_"`, printing only the rest.
3. **Expert** — Write a simple prime-checking function using a `for` loop with
   `break`: for a given number, loop through possible divisors and `break`
   the moment a divisor is found (with an `else` on the `for` loop to confirm
   primality if no `break` occurred).

---

## 5. Nested Conditionals & Loops

**What it does:** Combines the structures above — conditions inside loops,
loops inside conditions, or loops inside loops — to solve more layered
problems.

### Exercises
1. **Beginner** — Loop through numbers 1–15 and print `"Fizz"` if divisible
   by 3, `"Buzz"` if divisible by 5, `"FizzBuzz"` if both, otherwise the
   number itself (classic FizzBuzz).
2. **Intermediate** — Given a 2D list (a grid of numbers), use nested `for`
   loops with an `if` check to find and print the largest number in the grid.
3. **Expert** — Build a simple **Tic-Tac-Toe board checker**: given a 3x3 grid
   (list of lists) of `"X"`, `"O"`, or `""`, use nested loops and conditionals
   to determine if there's a winner, a draw, or the game is still ongoing.

---

## 6. `match` / `case` (Structural Pattern Matching, Python 3.10+)

**What it does:** A more readable alternative to long `if/elif` chains when
you're checking one value against several possible patterns.

### Exercises
1. **Beginner** — Use `match/case` to turn a day number (1–7) into its name
   (`"Monday"`, `"Tuesday"`, etc.), with a default case for invalid input.
2. **Intermediate** — Use `match/case` to build a simple calculator: match an
   operator string (`"+"`, `"-"`, `"*"`, `"/"`) and apply it to two numbers.
3. **Expert** — Use `match/case` with pattern-matching on data structures:
   given a list/tuple representing an HTTP-like response (e.g.
   `("GET", "/users", 200)` or `("POST", "/login", 401)`), match on
   combinations of method and status code to print custom messages —
   including a wildcard `case _` and a guard clause (`case (m, p, code) if
   code >= 500`).

---

*Tip: work through these in order — each section leans on the one before it,
and the "Expert" exercises deliberately combine multiple topics at once.*
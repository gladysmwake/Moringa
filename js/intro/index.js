let grossMonthlySalary = null;

while (true) {
    let gross = prompt("Enter your gross monthly salary:");
    if (gross !== null && gross.trim() !== "" && !isNaN(gross)) {
        gross = Number(gross);
        if (gross > 0) {
            grossMonthlySalary = gross;
            break;
        }
    }
    alert(`Invalid amount entered.\nEnsure you enter a number greater than 0`);
}

// ── NSSF (Tiered) ──────────────────────────────
let nssf = 0;

if (grossMonthlySalary <= 9000) {
    // Only Tier 1
    nssf = grossMonthlySalary * 0.06;

} else if (grossMonthlySalary <= 108000) {
    // Tier 1 + Tier 2
    let tier1 = 9000 * 0.06;                              // 540
    let tier2 = (grossMonthlySalary - 9000) * 0.06;
    nssf = tier1 + tier2;

} else {
    // Capped at max
    nssf = 6480;
}

// ── PAYE (Progressive) ─────────────────────────
let paye = 0;
let remaining = grossMonthlySalary - nssf;

if (remaining > 0) {
    let taxable = Math.min(remaining, 24000);
    paye = paye + (taxable * 0.10);
    remaining -= taxable;
}

/*
    Math.min(remaining, 24000) — take whichever is smaller, what's left or 24,000
Tax that portion at 10%
Subtract it from remaining so the next block only sees what's left
*/

if (remaining > 0) {
    let taxable = Math.min(remaining, 8333);
    paye = paye + (taxable * 0.25);
    remaining -= taxable;
}
if (remaining > 0) {
    let taxable = Math.min(remaining, 467667);
    paye += taxable * 0.30;// same as writting paye = paye + (taxable * 30)....
    remaining -= taxable;//same as writting remaining = remaining - taxable
}
if (remaining > 0) {
    let taxable = Math.min(remaining, 300000);
    paye = paye + (taxable * 0.325);
    remaining -= taxable;
}
if (remaining > 0) {
    paye = paye + (remaining * 0.35);
}

// ── Final Calculations ─────────────────────────
let shif = 0.025 * grossMonthlySalary;
let HousingLevy = 0.015 * grossMonthlySalary;
let totalDeductions = nssf + paye + shif ;
let netSalary = grossMonthlySalary - totalDeductions;


alert(`Gross Salary:     KES ${grossMonthlySalary}
NSSF Deduction:   KES ${nssf}
PAYE Deduction:   KES ${paye}
SHIF  Deduction: ${shif}
HOUSING LEVY Deduction  : ${HousingLevy}
Total Deductions: KES ${totalDeductions}
Net Salary:       KES ${netSalary}
`);





//CODE EXPLANATION
/*
    OK let's go **line by line**, slowly 🙂

---

## Part 1: Getting the Salary

```javascript
let grossMonthlySalary = null;
```
Create a variable to store the salary. Set it to `null` for now because we don't have it yet.

---

```javascript
while (true) {
```
Loop forever until we get a valid salary. `true` means it will never stop on its own — only a `break` stops it.

---

```javascript
    let gross = prompt("Enter your gross monthly salary:");
```
Show the user a popup asking for their salary. Whatever they type is stored in `gross` — but at this point it's still a **string**, not a number.

---

```javascript
    if (gross !== null && gross.trim() !== "" && !isNaN(gross)) {
```
Before accepting it, check three things:
- `gross !== null` — they didn't press Cancel
- `gross.trim() !== ""` — they didn't just press Enter with nothing typed
- `!isNaN(gross)` — what they typed is actually a number

All three must be true to proceed.

---

```javascript
        gross = Number(gross);
```
Convert the string `"5000"` into the actual number `5000`. We need this because prompt always returns a string.

---

```javascript
        if (gross > 0) {
            grossMonthlySalary = gross;
            break;
        }
```
If the number is positive, save it into `grossMonthlySalary` and exit the loop with `break`.

---

```javascript
    alert(`Invalid amount entered.\nEnsure you enter a number greater than 0`);
```
If any check failed, show this error and the loop runs again from the top. `\n` means new line inside the alert.

---

## Part 2: NSSF Calculation

```javascript
let nssf = 0;
```
Start NSSF at 0. We'll fill it in based on the salary band.

---

NSSF works in **tiers** — your salary is split into portions and each portion is taxed:

```javascript
if (grossMonthlySalary <= 9000) {
    nssf = grossMonthlySalary * 0.06;
```
If salary is 9,000 or below, the **whole salary** is taxed at 6%.

Example — salary is KES 7,000:
```
nssf = 7000 * 0.06 = 420
```

---

```javascript
} else if (grossMonthlySalary <= 108000) {
    let tier1 = 9000 * 0.06;
    let tier2 = (grossMonthlySalary - 9000) * 0.06;
    nssf = tier1 + tier2;
```
If salary is between 9,001 and 108,000, split it into two portions:
- **Tier 1** — the first KES 9,000 taxed at 6% = always KES 540
- **Tier 2** — everything above 9,000 also taxed at 6%
- Add them together

Example — salary is KES 30,000:
```
tier1 = 9000 * 0.06 = 540
tier2 = (30000 - 9000) * 0.06 = 21000 * 0.06 = 1260
nssf = 540 + 1260 = 1800
```

---

```javascript
} else {
    nssf = 6480;
}
```
If salary is above 108,000, NSSF is capped at a flat KES 6,480. No matter how high the salary, NSSF never goes above this.

---

## Part 3: PAYE Calculation

This is where it gets interesting. PAYE uses a **progressive** system — different portions of your salary are taxed at different rates.

```javascript
let paye = 0;
let remaining = grossMonthlySalary - nssf;
```
- `paye` starts at 0, we'll add to it piece by piece
- `remaining` is the amount left to be taxed — we start with salary minus NSSF because NSSF is deducted before PAYE is calculated

---

Now each `if` block handles **one tax band**:

```javascript
if (remaining > 0) {
    let taxable = Math.min(remaining, 24000);
    paye += taxable * 0.10;
    remaining -= taxable;
}
```
- `Math.min(remaining, 24000)` — take whichever is smaller, what's left or 24,000
- Tax that portion at 10%
- Subtract it from remaining so the next block only sees what's left

Example — salary KES 10,000 (after NSSF):
```
taxable = Math.min(10000, 24000) = 10000
paye += 10000 * 0.10 = 1000
remaining = 10000 - 10000 = 0
→ all other blocks are skipped because remaining = 0
```

Example — salary KES 50,000 (after NSSF):
```
taxable = Math.min(50000, 24000) = 24000
paye += 24000 * 0.10 = 2400
remaining = 50000 - 24000 = 26000
→ moves to next block with 26,000 still to tax
```

---

```javascript
if (remaining > 0) {
    let taxable = Math.min(remaining, 8333);
    paye += taxable * 0.25;
    remaining -= taxable;
}
```
Same pattern — take up to 8,333, tax it at 25%, subtract from remaining.

---

```javascript
if (remaining > 0) {
    let taxable = Math.min(remaining, 467667);
    paye += taxable * 0.30;
    remaining -= taxable;
}
```
Take up to 467,667, tax at 30%.

---

```javascript
if (remaining > 0) {
    let taxable = Math.min(remaining, 300000);
    paye += taxable * 0.325;
    remaining -= taxable;
}
```
Take up to 300,000, tax at 32.5%.

---

```javascript
if (remaining > 0) {
    paye += remaining * 0.35;
}
```
Anything left over — tax at 35%. No `Math.min` needed here because this is the last band, whatever is left gets taxed.

---

## Part 4: Final Calculations

```javascript
let totalDeductions = nssf + paye;
```
Add NSSF and PAYE together to get the total amount being deducted.

---

```javascript
let netSalary = grossMonthlySalary - totalDeductions;
```
Subtract total deductions from gross salary — this is what actually lands in your bank account.

---

```javascript
alert(`Gross Salary:     KES ${grossMonthlySalary}
NSSF Deduction:   KES ${nssf}
PAYE Deduction:   KES ${paye}
Total Deductions: KES ${totalDeductions}
Net Salary:       KES ${netSalary}`);
```
Show the user a full breakdown in one alert popup.

---

## The Big Picture

```
Gross Salary (what your employer pays)
    ↓ minus NSSF (pension, capped at 6,480)
    ↓ minus PAYE (income tax, progressive rates)
    = Net Salary (what you take home)
```

The reason PAYE uses separate `if` blocks instead of `if/else if` is because **multiple bands can apply to one salary** — the first 24,000 is taxed at 10%, the next 8,333 at 25%, and so on. With `if/else if` only one branch would run, which would give the wrong answer.

---










 */
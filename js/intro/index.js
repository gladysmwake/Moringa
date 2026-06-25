let grossMonthlySalary = null;

while (true) {
    let gross = prompt("Enter your gross monthly salary:");
    if (!isNaN(gross)) {
        gross = Number(gross);
        if (gross > 0) {
            grossMonthlySalary = gross;
            break;
        }
    }
    alert(`Invalid amount entered.
            Ensure you enter a number greater than 0`);
}

let paye = 0;

if (grossMonthlySalary >= 0 && grossMonthlySalary <= 24000) {
    paye = grossMonthlySalary * 0.10;

} else if (grossMonthlySalary >= 24001 && grossMonthlySalary <= 32333) {
    paye = grossMonthlySalary * 0.25;

} else if (grossMonthlySalary >= 32334 && grossMonthlySalary <= 500000) {
    paye = grossMonthlySalary * 0.30;

} else if (grossMonthlySalary >= 500001 && grossMonthlySalary <= 800000) {
    paye = grossMonthlySalary * 0.325;

} else if (grossMonthlySalary > 800000) {
    paye = grossMonthlySalary * 0.35;
}


alert(`Your gross salary: KES ${grossMonthlySalary}
Your PAYE deduction: KES ${paye}
Net salary: KES ${grossMonthlySalary - paye}`);
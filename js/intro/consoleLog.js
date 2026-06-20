/*

console.log() is a function in JavaScript that is used to print messages to the console. 
It is commonly used for debugging purposes, allowing developers to see the output of their code and identify any issues.
The console.log() function can take multiple arguments, which will be printed in the order they are provided. It can also be used to display variables, objects, and other data types in a readable format.
Overall, console.log() is a valuable tool for developers to understand and troubleshoot their code effectively.

*/

const sallaryGross=50000;
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
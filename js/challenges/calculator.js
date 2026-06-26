/*
    Exercise: NHIF Deduction Calculator
Write a JavaScript program that:

Prompts the user to enter their gross monthly salary
Validates the input (must be a number greater than 0, keep asking if invalid)
Calculates their NHIF deduction based on this table:

Income Band           (KES)Deduction (KES)
0-5999                  150
6000-7999               300
8000-11999              400
12000-14999             500
15000-19999             600
20000-24999             750
25000-Above             950

Shows the user an alert with their salary, NHIF deduction, and net salary


*/

let salary =null

while(true){
    let gross = prompt("Enter your monthly salary:")
    if (!isNaN(gross)){
        gross = Number(gross);
        if (gross > 0) {
            salary = gross;
            break;
        }
    }
    alert(`Invalid amount entered.
            Ensure you enter a number greater than 0`);
}
 


let nhif=0;
let netSalary=0;

if (salary>=0 && salary<=5999){
    nhif =  150;
    
}
else if(salary>=6000 && salary<=7999){
    nhif =  300;
     
} 
else if(salary>=8000 && salary<=11999){
    nhif = 400;
    
    
} 
else if(salary>=12000 && salary<=14999){
    nhif =  500;
   
} 
else if(salary>=15000 && salary<=19999){
    nhif = 600;

}
else if(salary>=20000 && salary<=24999){
    nhif =  750;
   
}  
else if(salary>=25000){
    nhif =  950;

} 

netSalary = salary -nhif;

alert(`Your monthly salary is ${salary}
    Your nhif deduction is ${nhif}
    Your net salary is ${netSalary}`);

  

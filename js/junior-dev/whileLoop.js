//let i=36;

/*

while(i <= 1000 ){
    console.log(i);
    i++;
}
    */

/**
 * creates a function that prints numbers from the given number down to 1
 * @param {} i 
 */

/*function printNumbers(i){
    while (i >0){
        console.log(i);
        i--;
    }
}
printNumbers(36);
*/


 function mathTables(){
    prompt("Enter a number to the maths table: ");
    let num1 = prompt("Enter a number to the maths table: ");

    if (isNaN(num1) || num1 < 1) {
        alert("Please enter a valid positive number.");
        return;
    }

    let num2 = prompt("Enter a number to the maths table: ");

    if (isNaN(num2) || num2 < 1) {
        alert("Please enter a valid positive number.");
        return;
    }

    printMathTable(num1, num2)

    function printMathTable(num1, num2){
        for (let i = num1; i >= 1; i--) {
        for (let j = num2; j >= 1; j--) {
            if (i === j) continue;
            console.log(`${i}*${j}=${i * j}`);
        }
        
    }
}

}


mathTables();
/*function Avarage(array1, array2){
     array1=[21,34,67,89,90,23];
     array2=[34,56,78,90,87,98,66];
     let average=(array1.reduce((a,b)=>a+b,0)/array1.length )
     let average2 =( array2.reduce((a,b)=>a+b,0)/array2.length);
    return [average,average2];


}

console.log(Avarage()); */


/*function getGrade(score){
     score = prompt("Please Enter your score :");
    switch(true){
        case score >= 90 && score <=100 :
            return "A +";
            break;
            case score >= 80 && score <=89 :
            return "A";
            break;
            case score >= 70 && score <=79 :
            return "B+";
            break;case score >= 60 && score <=69 :
            return "B";
            break;case score >= 50 && score <=59 :
            return "C";
            break;case score >= 40 && score <=49 :
            return "PASS";
            break;
            default:
                return "FAIL";
                break;

    }
}

//console.log(getGrade());

function generateReport(name, scores) {
    name = prompt("Please enter your name:");
    scores = prompt("Please enter your scores, separated by commas:");
    
    // convert "78,92,85,67,90" (string) into [78, 92, 85, 67, 90] (array of numbers)
    scores = scores.split(",").map(Number);
    
    let average = scores.reduce((a, b) => a + b, 0) / scores.length;
    let grade = getGrade(average);
    return `Name: ${name}\nAverage Score: ${average}\nGrade: ${grade}`;
}

console.log(generateReport());*/

function curveScores(array, points){
     array = prompt("Please enter your scores :");
     points = prompt("Please enter the points to curve :");
    let curvedScores = array.map(score => score + points);
    return curvedScores;
}

curveScores();
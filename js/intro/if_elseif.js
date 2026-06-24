let input= prompt("Enter your age:");
let age = Number(input);
//let gender= prompt("Enter your gender:");

//alert(`You entered ${age}`);
//alert(`Your gender is ${gender}`);

if (isNaN(age) || age <= 0) {
    alert("Invalid input! Please enter a valid age.");
} else {
       let gender = prompt("Enter your gender:").toLowerCase();
       
    alert(`You entered age: ${age}`);
    alert(`Your gender is: ${gender}`);


if(age<10){
    alert(`You are a baby.`)
}

    else if(age>=10 && age<= 17){
    alert(`You are a teen`)
}

    else if(age>18 && age<=26 ){
    alert(`You are a young adult`)
}

    else if(age>27 && age <=44){
    alert(`You can start looking for a partner to settle down with`)
}

    else if(age>45 && age <=54){
    alert(`You should be thinking of retirement`)
}

    else if (age>=55){
    if (gender === "male") {
        alert("You are a guka!");
    } else if (gender === "female") {
        alert("You are a shosh!");
    } else {
        alert("You are a senior!");
    }
    
}

}


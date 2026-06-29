// Scenario 1: No return — see what happens (you'll get undefined)
function sayMyName() {
    let first_Name = "Xoxo";
    console.log(`Your first name is ${first_Name}`);
    
    let second_Name = "Cutie";
    console.log(`Your second name is ${second_Name}`);

    let full_name = `${first_Name} ${second_Name}`;
    console.log(`Your names are ${full_name}`);
}

let sayNameValue = sayMyName();
console.log(`Function returned ${sayNameValue}`); 


// Scenario 2: return after statement 2 — exits before second name prints
function sayMyName() {
    let first_Name = "Xoxo";
    console.log(`Your first name is ${first_Name}`);
    return; 
    let second_Name = "Cutie";
    console.log(`Your second name is ${second_Name}`);

    let full_name = `${first_Name} ${second_Name}`;
    console.log(`Your names are ${full_name}`);
}


// Scenario 3: return after statement 4 — exits before full name prints
function sayMyName() {
    let first_Name = "Xoxo";
    console.log(`Your first name is ${first_Name}`);
    
    let second_Name = "Cutie";
    console.log(`Your second name is ${second_Name}`);
    return; 

    let full_name = `${first_Name} ${second_Name}`;
    console.log(`Your names are ${full_name}`);
}


// Scenario 4: return a string of your choice
function sayMyName() {
    let first_Name = "Xoxo";
    console.log(`Your first name is ${first_Name}`);
    
    let second_Name = "Cutie";
    console.log(`Your second name is ${second_Name}`);

    let full_name = `${first_Name} ${second_Name}`;
    console.log(`Your names are ${full_name}`);
    return "Pookie";
}


console.log(`Function returned ${sayNameValue}`); 


// Scenario 5: return a number of your choice
function sayMyName() {
    let first_Name = "Xoxo";
    console.log(`Your first name is ${first_Name}`);
    
    let second_Name = "Cutie";
    console.log(`Your second name is ${second_Name}`);

    let full_name = `${first_Name} ${second_Name}`;
    console.log(`Your names are ${full_name}`);
    return 21; 
}


console.log(`Function returned ${sayNameValue}`);


// Scenario 6: return a boolean of your choice
function sayMyName() {
    let first_Name = "Xoxo";
    console.log(`Your first name is ${first_Name}`);
    
    let second_Name = "Cutie";
    console.log(`Your second name is ${second_Name}`);

    let full_name = `${first_Name} ${second_Name}`;
    console.log(`Your names are ${full_name}`);
    return true; 
}

console.log(`Function returned ${sayNameValue}`); 
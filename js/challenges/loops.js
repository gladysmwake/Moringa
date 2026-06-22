/*
    Challenge
You have a list of temperatures for the week:
javascriptlet temperatures = [72, 85, 60, 90, 55, 78, 88];
Using a for...of loop, write code that:

Loops through each temperature
If the temperature is above 80 print "🔥 hot day! - [temp]"
If the temperature is below 65 print "🥶 cold day! - [temp]"
Otherwise print "😊 nice day! - [temp]"


Expected Output
😊 nice day! - 72
🔥 hot day! - 85
🥶 cold day! - 60
🔥 hot day! - 90
🥶 cold day! - 55
😊 nice day! - 78
🔥 hot day! - 88



*/

let temperatures =[72, 85,60,90,55,78,88];

for (let temperature of temperatures){
    if (temperature>80){
        console.log(`its a hot day ${temperature}`);
    }
    else if(temperature<65){
        console.log(`its a cold day ${temperature}`);
    }
    else{
        console.log(`its a nice day ${temperature}`);
    }
}





/*Your Task
Using a for...of loop write code that:

Skips anyone named "skip" using continue
If the person is under 18 print "❌ sorry [name] you're too young!"
If the club is full after 3 people print "🛑 club is full!" and stop using break
Otherwise print "✅ welcome in [name]!"


Expected Output
✅ welcome in xoxo!
❌ sorry cutie you're too young!
✅ welcome in bestie!
✅ welcome in trouble!
🛑 club is full!

Hints 💡

You'll need a counter to track how many people got in
You'll need both continue and break
You can access each person's name with person.name and age with person.age 
*/


let count =0;
let peoples=[
    
    { name: "xoxo", age: 20 },
    { name: "cutie", age: 16 },
    { name: "bestie", age: 22 },
    { name: "trouble", age: 19 },
    { name: "skip", age: 25 },
    { name: "buddy", age: 18 },
       
];


for (let people of peoples){
    if (people.name ==="skip"){
        console.log(`skipping ${people.name}`);
        continue;
    }


if (people.age<18 ){
    console.log(`Sorry ${people.name} youre too young`);
}
else{
    console.log(`Welcome in ${people.name}`);
    count++;
}

if(count===3){
    console.log(`Club is full`);
    break;
}


}
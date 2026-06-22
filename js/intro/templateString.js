let firstName="Xoxo"
let secondName="Cutie"
let age=15;
let address="Nairobi";

let userDetails=firstName+" "+secondName+" "+age+" "+address;
console.log(userDetails);
console.log("user details is", typeof userDetails);


let userDetails2=`${firstName} ${secondName} is ${age} ${address}`;
console.log(userDetails2);
console.log(`${firstName} ${secondName} is ${age} ${address}`);
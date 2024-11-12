// control structure in js is essential for controlling the flow of
// execution in your code. the allow you to dictate how your
// programme should respond based on conditions.

// 1. conditional statement
// conditional statement executes a block of code if the specified 
// condition is true or false

// a. If statement
let temperature = 30;

if( temperature > 25) {
    console.log('it is a hot day!')
} else {
    console.log('it is a cold ')
}

const isAdmin = false;
const isSuperUser = false;

if ( isAdmin || isSuperUser) {
    console.log("you can have access to the app")
} else {
    console.log("you are not allow to access this app")
}

const hasPaidSchoolFees = true;
const hasGoodhealth = true;

if(hasPaidSchoolFees && hasGoodhealth) {
    console.log("Welcome to class")
} else {
    console.log("go back home")
}

let age = 25;
if (age > 25){
    console.log("your age is above 25")
} else if(age < 25){
    console.log("your age is below 25")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
} else {
    console.log("your age is 25")
}


let fruit = "apple";
if(fruit === "banana") {
    console.log("we have banana in the store")
} else if(fruit === "orange"){
    console.log("we have orangee in our store")
} else if(fruit === "coconut"){
    console.log("coconut is in our store")
} else if(fruit === "apple"){
    console.log("we have apple in our store")
} else{
    console.log("we do not have any fruit in our store")
}

let fruit1 = "apple";

switch (fruit1) {
    case "banana":
        console.log("it is banana");
        break;
        case "apple":
            console.log("it is apple");
            break;
            default:
                console.log("we do not have any fruit");                                               
}                                                      


let number = "25";

switch (number) {
    case "< 25":
        console.log("it is < 25");
        break;
        case "25":
            console.log("it is 25");
            break;
            default:
                console.log("it is above 25");
}

const actions = ["state", "stop", "pause"];
let userAction = "start";
let isLoggedIn = true;
switch(true) {
    case actions.includes(userAction) && isLoggedIn:
        console.log("Action permitted:" + userAction)
        break;
        case actions.includes(userAction) && isLoggedIn:
            console.log("please log in to perform this action");
            break;
            default:
                console.log("No valid case found.");
                
}

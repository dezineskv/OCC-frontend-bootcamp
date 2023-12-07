// conditional statements
let age = 18;

// if
if (age >= 18) {
console.log("You are eligible to vote");
} else {
    console.log("I did not execute");
}

// if else 
let temperature = 1;
if (temperature < 0) {
    console.log("Weather is freezing");
    } else if (temperature >= 0 && temperature < 20 ) {
        console.log("It is cold");
    } else {
        console.log("It is warm")
    };

    // conditional: switch statement
let day = "Friday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week")
        break;
        case "Friday":
            console.log("It's the end of the week")
            break;
            default:
                console.log("It's a regular day")
                break;
}
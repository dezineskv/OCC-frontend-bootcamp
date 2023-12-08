// user enters the number here
let score = parseInt(prompt("Enter the score: "));

// grades per score range
let a = "A";
let b = "B";
let c = "C";
let d = "D";
let f = "F";

// conditions for calculating the grade, given the score range
if (score >= 90) {
    console.log("Your score of" + " " + score + " " + "means your grade is:", a);
} 

else if (score >= 80 && score < 90) {
    console.log("Your score of" + " " + score + " " + "means your grade is:", b);
} 

else if (score >= 70 && score < 80) {
    console.log("Your score of" + " " + score + " " + "means your grade is:", c);
} 
else if (score >= 60 && score < 90) {
    console.log("Your score of" + " " + score + " " + "means your grade is:", d);
} 
else {
    console.log("Your score of" + " " + score + " " + "means your grade is:", f);
}


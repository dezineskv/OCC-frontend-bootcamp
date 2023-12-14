// arrow function

// function myFunction () {

// }

const greet = () => {
    console.log("Merry Christmas!");
}

greet();

//enhanced object literals
const person = {
    name: "Ron",
    age: 21,
    // greeting: () => {
    //     console.log(`My name is ${person.name}`);
    // } 
    greeting ()  {
        console.log(`My name is ${this.name}`);
    } 
}
person.greeting();

// spread and rest operators for arrays and functions
// spread
function sum(x,y,z) {
    return x + y + z;
}
const numbers = [1,2,3];
console.log(sum(...numbers))

// rest to put numbers into the array
function myFunction(firstArg, ...restofArgs) {
    console.log(firstArg);
    console.log(restofArgs);

}
myFunction("one", "two", "three", "four");

// common JS built-in methods
// arrays:
// filter
let numbers2 = [1,2,3,4,5,6,7,8,9,10];
const even = numbers2.filter((number)=> number % 2 == 0);
console.log(even);
//no curly brace needed. put function in as a param. even # has 0 remainder.
const odd = numbers2.filter((number)=> number % 2 !== 0);
console.log(odd);
// or use modulous !=0 or ==1

// string split
const message = "Hello Universe!";
const words = message.split(" ");
console.log(words);

// string 'includes' to get words, boolean. is case senstivie.
const sentence = "the quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("fox");
console.log(containsWord);

// check string length
const sentenceLength = sentence.length;
console.log(sentenceLength);

// objects
const cat = {
    name: "Chicha",
    age: 3,
    color: ["Black", "White"]

}
 // Keys
 console.log(Object.keys(cat));
 

 // Values
 console.log(Object.values(cat));

 // entries
 console.log(Object.entries(cat));

 // MATH methods
 // max & min
 const maxNumber = Math.max(10,5,20,30);
 console.log(maxNumber);
 const minNumber = Math.min(10,5,20,30);
 console.log(minNumber);

 // random numbers generation mul# of digists ex. 1000 equals 3 digits.
 const randomValue = Math.random() * 1000;
 console.log(randomValue);
 // for whole # use round method
 console.log(Math.round(randomValue));
 //round down with floor method
 console.log(Math.floor(randomValue));
 //round up
 console.log(Math.ceil(randomValue));

 // Nested math methods, usually floor and random. between 1 and 100
 const randomNumber = Math.floor(Math.random() *100);
 console.log(randomNumber);

 // other methods
 // date method is non primitive data type. for long form:
//  const currentDate = new Date();
//  console.log(currentDate);
// check this one--------------
const christmas = 2023, 12, 25;
console.log(getDate(christmas));

// toFixed. random value to a fixed number of decimals. use directly after the floated number. getting a specific # of decimals. and it rounds.
const price = 100.12345.toFixed(5);
console.log(price);

// to string store in variable then use method directly on the #
// const num = 38.toString(); --can't do this!
const num = 38;
const parsedString = num.toString();
console.log(parsedString + 1);



 
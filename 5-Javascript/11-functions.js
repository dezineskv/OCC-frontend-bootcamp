// functions are a set of instructions. resusable code block. takes in parameters & returns action per arguments.

function greet () {
    console.log("Instruction # 1");
    console.log("Merry Christmas");

}
greet();

// function hoisting
// 1. function declaration. functions will be placed on top 

// functionDeclaration () {
    function functionDeclaration () {

    console.log("hello world I am a function declaration");
}

functionDeclaration();

// functionExpression(); can't call it here before defining it
// 2. Function expression. anonymous function assigned to a variable
// This one is better to use!!
const functionExpression = function() {
    console.log("hello world I am a function expression");
}
functionExpression();

// function with parameters (variables). arguments are the values called.
function greet(name) {
    console.log("Hello", name);
}
greet('Regel');
greet('Gab');

// function with a return value
function sum(a,b) {
    a = a + 1;
    console.log("Hello you");
    return a + b;
}
console.log("The sum is", sum(10,5));

// anonymous functions. common use for callback functions. doesn't have a name but assigned to a variable.
let greet2 = function () {
console.log("hello greet 2");
}
greet2();

// create a higher order function. uses a function as an argument/params
function calculate(operation, num1, num2) {
    return operation(num1, num2);

}
// callback function
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

// using the higher order function
let total = calculate(add, 10,5);
let difference = calculate(subtract, 23, 13);

console.log("result of addition is", total);
console.log("result of subtraction is", difference);
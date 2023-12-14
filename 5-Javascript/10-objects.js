// objects Notes: Objects, arrays , dates and functions are the non-primitive data types. Unlike the number and string that just store value directly, these are reference type. They store references to the location in memory. (Sounds complicated so lets just say they are a reference to a data)
//example has a hobby array and a greeting method
const person = {
    firstName: "Gab",
    lastName: "Doe",
    age: 28,
    height: "5'9",
    nickName: "KD",
    hobbies: ["reading", "gaming", "painting"],
    // method. And template literals with back tick and ${}.
    greet: function() {
        // console.log("Hello my name is", person.firstName);
        console.log(`Hello my name is ${person.firstName} and I am ${person.age}`);
    }
}
// dot notation
console.log(person.firstName);
console.log(person.hobbies);
console.log(person.greet());
person.greet();

// adding new properties
person.nationality = "American";
console.log(person.nationality);

// adding new methods
person.talkHobbies = function() {
    console.log(`I like ${person.hobbies[1]}!`);
}
person.talkHobbies();

// nest object within an object

const movie = {
    title: "Pulp Fiction",
    genre: "Action",
    cast: ["John Travolta", "Smaul L. Jackson"]
}

person.favoriteMovie = movie;
console.log(person.favoriteMovie.title);

// destructuring the person object's properties. now properties are variables instead of person.lastName etc...
// const lastName = person.lastName;
const { lastName, nickName, age } = person;
console.log(lastName, nickName, age);
const { height } = person;
console.log(height);
// inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`)
    }

}
// new class extends the class
class Dog extends Animal {
    bark() {
        console.log("woof woof");
    }
}
const myDog = new Dog("buddy");
myDog.bark();
myDog.eat();

// new class extends the class
class Goat extends Animal {
    bark() {
        console.log("meeeee");
    }
}
const myGoat = new Goat("goaty");
myGoat.bark();
myGoat.eat();


// polymorphism. this will overwrite the inheritance eat function. no constructor just the function here.
class Animal {
    makeSound() {
return "the animal makes noise";
    }
}
// use super to find the parent so we can overwrite it.
class Dog extends Animal {
    makeSound() {
        return super.makeSound() + ", the dog barks";
    }
}
// create new object to use above
const dog = new Dog();
console.log(dog.makeSound());

// create new cat using similar approach
class Cat extends Animal {
    makeSound() {
        return super.makeSound() + ", the cat purs";
    }
}
const cat = new Cat();
console.log(cat.makeSound());
// console.log("Connected");
// create a class vsdeclaring object over and over
// encapsulation
     // pass 2 params to constructor. update the this. value to assign it initial values. create deposit method.
class BankAccount {
    constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    }
    // lifespan available for first use. now update the balance on method.
    deposit(amount) {
    this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }
    getAccountInfo() {
        return `Account number = ${this.accountNumber}, Balance: ${this.balance}`
    }
}
// this was the blueprint for the oject by using new keyword on the class. pass 2 arguments to the new object. account # and the balance.
const myAccount = new BankAccount("123456789", 1000);
myAccount.deposit(500);
// adding 500 to balance then withdraws too
myAccount.withdraw(200);
//use the get account method that returns the account # and balance info. encapsulated properties and methods.
console.log(myAccount.getAccountInfo());

// another object
const kimAccount = new BankAccount("9999123456789", 2000);
kimAccount.deposit(300);
kimAccount.withdraw(100);
console.log(kimAccount.getAccountInfo());
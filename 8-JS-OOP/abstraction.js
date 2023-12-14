// abstraction
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;  
    }
  
    start() { 
      return `${this.make} ${this.model} is starting the engine.`;
  
    }
  
    stop() { 
      return `${this.make} ${this.model} is stopping the engine.`; 
    }
  
  }

  const myCar = new Vehicle("Toyota", "Camry");
  console.log(myCar.start());
  console.log(myCar.stop());
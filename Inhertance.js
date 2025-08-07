
// Inheritance — Vehicle and Car
// Vehicle class has fields: make, model, and method start()
// Car extends Vehicle, adds fuelType
// Override the start() method in Car to print: "Starting [fuelType] car: [make] [model]"

class Vehicle{
  constructor(make,model){
    this.make=make;
    this.model=model;
  }

  start(){
    return `Car ${this.make} model ${this.model}`
  }
}

class Car extends Vehicle{
 
  constructor(fuelType,make,model){
    
    super(make,model);
    this.fuelType=fuelType;
  }

  start(){
    return `Starting ${this.fuelType}, Car:${this.make}, ${this.model}`
  }
}

let vehicle= new Car("petrol","BMW","TTX")
console.log(vehicle.start())
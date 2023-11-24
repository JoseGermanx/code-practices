//parent class
class Transport {
  constructor(combustible) {
    this.combustible = combustible;
  }

  start() {
    console.log("Start the engine");
  }
}

//child class

class Car extends Transport {
  start() {
    console.log(`This Car start with ${this.combustible}`);
  }
}

//child class

class Airplane extends Transport {
  start() {
    console.log(`This airplane start with ${this.combustible}`);
  }
}

const ferrari = new Car("93 octanes gas");
const airbus = new Airplane("Jet A1");

ferrari.start();
airbus.start();

//parent class
class Instrument {
  constructor(name, type) {
    (this.name = name), (this.type = type);
  }

  sing() {
    console.log(`The ${this.name}, is a ${this.type} musical instrument`);
  }
}

//child class

class Drum extends Instrument {
  constructor(name, type, sound) {
    super(name, type);
    this.sound = sound;
  }

  sounds() {
    console.log(
      `The sound of Drum ${this.name}, of the type ${this.type} is ${this.sound}`
    );
  }
}

const myDrum = new Drum("Tama", "Percusión", "Estruendoso");

myDrum.sing();
myDrum.sounds();

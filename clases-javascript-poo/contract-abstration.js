//contract

class Empleado {
  constructor(name, deparment) {
    this.name = name;
    this.deparment = deparment;
  }

  obtenerBonificacion() {
    throw new Error(`This is a abstract class, it´s to be implemented`);
  }
}

//child class
class Administrativo extends Empleado {
  constructor(name, deparment) {
    super(name, deparment);
  }
  obtenerBonificacion(){
    console.log(`Bonofication for ${this.deparment} is 10%. Employed ${this.name}`)
  }
}

const admin1 = new Administrativo("Jose", "Logistica")
admin1.obtenerBonificacion();
console.log(admin1.deparment);

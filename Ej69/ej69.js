class Persona {
    constructor(nombre, edad, trabajo) {
        this.nombre = nombre;
        this.edad = edad;
        this.trabajo = trabajo;
    }

    cambiarTrabajo(nuevoTrabajo) {
        this.trabajo = nuevoTrabajo;
    }

    descripcion() {
        return `${this.nombre}, de ${this.edad} años, trabaja como ${this.trabajo}.`;
    }
}

const persona1 = new Persona('Alejandro',27, 'programador web');
const persona2 = new Persona('Gil Carlos', 27, 'programador multimlataporfas');

console.log(persona1.descripcion());
persona1.cambiarTrabajo('Barrendero');
console.log(persona1.descripcion());

console.log(persona2.descripcion());
persona2.cambiarTrabajo('Albañil');
console.log(persona2.descripcion());

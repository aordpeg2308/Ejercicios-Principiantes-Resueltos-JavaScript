class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar() {
        return `${this.nombre} está trabajando.`;
    }
}

class Gerente extends Empleado {
    dirigir() {
        return `${this.nombre} está dirigiendo el equipo.`;
    }
}

const empleado1 = new Empleado('Alejandro', 3000);
const gerente1 = new Gerente('Adrian', 5000);

console.log(empleado1.trabajar());
console.log(gerente1.trabajar());
console.log(gerente1.dirigir());

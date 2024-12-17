class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    descripcion() {
        return `Coche: ${this.marca} ${this.modelo} (${this.año})`;
    }
}

const coche1 = new Coche('Seat', 'Leon', 2000);
const coche2 = new Coche('Ford', 'Mustang', 2021);
const coche3 = new Coche('Nissan', 'Almeda', 2010);

console.log(coche1.descripcion());
console.log(coche2.descripcion());
console.log(coche3.descripcion());
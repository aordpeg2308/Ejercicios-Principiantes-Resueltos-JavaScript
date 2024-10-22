class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }
}

const rect1 = new Rectangulo(5, 10);
const rect2 = new Rectangulo(7, 3);
const rect3 = new Rectangulo(6, 8);

console.log(`Área del rectángulo 1: ${rect1.calcularArea()}`);
console.log(`Área del rectángulo 2: ${rect2.calcularArea()}`);
console.log(`Área del rectángulo 3: ${rect3.calcularArea()}`);

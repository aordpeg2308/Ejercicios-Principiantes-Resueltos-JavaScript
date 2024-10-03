function iterarArray(...arrayPasado) {
    arrayPasado.forEach(elemento => {
        console.log(elemento);
    });
}

let animales = [" perro","gallo","gato"];

let comida = ["pizza","macarrones","patatas bravas"];
let numeros = [2,6,10];

iterarArray(animales,comida,numeros);
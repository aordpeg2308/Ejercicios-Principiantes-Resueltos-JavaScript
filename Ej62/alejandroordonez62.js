function eliminarReplicados(array) {
    let mapa = new Map();
    
    array.forEach(indice => {
        mapa.set(indice.id, indice); // Si el id ya existe, se reemplaza con el último objeto con ese id
    });
    
    return Array.from(mapa.values()); // Devolvemos un array con los valores únicos
}


let arrayPersonas = [
    { id: 1, nombre: 'Alejandro' },
    { id: 2, nombre: 'Jesus' },
    { id: 1, nombre: 'CopiaAlejandro' },
    { id: 3, nombre: 'Adrian' },
    { id: 2, nombre: 'Copia Jesus' }
];

let arraySinRepeticiones = eliminarReplicados(arrayPersonas);
console.log(arraySinRepeticiones);

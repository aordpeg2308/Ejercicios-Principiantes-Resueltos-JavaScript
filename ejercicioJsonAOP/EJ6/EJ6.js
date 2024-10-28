let archivoJson = '[{"nombre": "Luis", "edad": 23, "nota": 8}, {"nombre": "Ana", "edad": 21, "nota": 9}, {"nombre": "Carlos", "edad": 22, "nota": 7}]';

let personas = JSON.parse(archivoJson);


personas.forEach(persona => {
    persona.nota += 1; 
    console.log(`Nombre: ${persona.nombre}, Nueva Nota: ${persona.nota}`); // Muestra el nombre y la nueva nota
});


let archivoJsonActualizado = JSON.stringify(personas);
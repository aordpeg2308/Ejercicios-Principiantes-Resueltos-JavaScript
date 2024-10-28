let archivoJason = '[{"nombre": "Sara", "edad": 25}, {"nombre": "Juan", "edad": 28}, {"nombre": "Pablo", "edad": 32}]';


let personas = JSON.parse(archivoJason);
personas.forEach(persona => {
    console.log(persona.nombre);
    console.log(persona.edad);
    
});
let persona ={
    nombre: "Carlos",
    edad:  45,
    correo: "carlosbarroso@gmail.com"

};

fetch('https://api.example.com/guardar',{
    method: 'POST',
    headers: {
            'Content - Type': 'application/json'
    },
    body: JSON.stringify(persona)
}).then(response => response.json()).then(data=> console.log('Exito:', data)).catch(error=> console.error("No existe el servidor", error));
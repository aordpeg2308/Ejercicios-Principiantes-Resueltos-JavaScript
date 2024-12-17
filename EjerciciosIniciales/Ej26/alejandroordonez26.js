let coloresGuardados = ["azul","rojo","verde","amarillo"];
let coloresJuego = []
let finJuego = false;
let coloresJugador = [];
let opcionGenerada;
let opcionJugador;

do{
    opcionGenerada = obtenerColorAleatorio(coloresGuardados);
    coloresJuego.push(opcionGenerada);
    
    mostrarSecuencia();
    coloresJugador = [];
    for (let i = 0; i < coloresJuego.length; i++) {
        opcionJugador = prompt(`Recuerda el color ${i + 1} (colores disponibles: ${coloresGuardados.join(", ")})`);
        coloresJugador.push(opcionJugador);

       
        if (coloresJugador[i] !== coloresJuego[i]) {
            finJuego = true; 
            alert("¡Has perdido! La secuencia era: " + coloresJuego.join(", "));
            break;
        }
    }


} while (!finJuego);

function mostrarSecuencia() {
    alert("Colores en la secuencia: " + coloresJuego.join(", "));
}


function obtenerColorAleatorio(array) {
    
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    
    return array[indiceAleatorio];
}
function menuPrincipal() { 
     let modoJuego = prompt("Bienvenido al CapibaraSimon. Escriba:  1 Modo Clasico. 2. Modo supervivencia 3. Para Salir");
     return modoJuego;
}

function generarColorAleatorio(array) {
     let indiceColor = Math.floor(Math.random() * array.length);
     let colorAleatorio = array[indiceColor];
     return colorAleatorio;
}

function generarColores() {
     let eleccion = prompt("Di los colores que quiere separados por espacio");
     eleccion = eleccion.toLowerCase();
     let arrayJugador = eleccion.split(" ");
     return arrayJugador;
}

function modoSupervivencia() {
     let hasPerdido = false;
     let colorAleatorio;
     let coloresElegidos;
     let opcionJugador;
     let coloresJugador = [];
     let coloresJuego = [];
     let contadorRondas;
     let rondas = prompt("Escribe el número de rondas que quiere que dure el juego: ");
     let opcionModo = prompt("Escriba 1 para jugar con los colores que ya estan o 2 para elegirlos tú");

     switch (opcionModo) {
          case "1": {
               hasPerdido = false;
               contadorRondas = 0;
               coloresJuego = [];
               coloresJugador = [];

               do {
                    colorAleatorio = generarColorAleatorio(coloresBase);
                    coloresJuego.push(colorAleatorio);
                    alert("Colores en la secuencia: " + coloresJuego.join(", "));

                    for (let i = 0; i < coloresJuego.length; i++) {
                         opcionJugador = prompt(`Recuerda el color ${i + 1} (colores disponibles: ${coloresBase.join(", ")})`);
                         coloresJugador.push(opcionJugador);

                         if (coloresJugador[i] !== coloresJuego[i]) {
                              hasPerdido = true; 
                              alert("¡Has perdido! La secuencia era: " + coloresJuego.join(", "));
                              break;
                         }
                    }
                    if (!hasPerdido) {
                         coloresJugador = []; 
                         contadorRondas++;
                    }
               } while (contadorRondas < rondas && !hasPerdido);
               break;
          }

          case "2": {
               hasPerdido = false;
               contadorRondas = 0;
               coloresJuego = [];
               coloresJugador = [];
               coloresElegidos = generarColores();

               do {
                    colorAleatorio = generarColorAleatorio(coloresElegidos);
                    coloresJuego.push(colorAleatorio);
                    alert("Colores en la secuencia: " + coloresJuego.join(", "));

                    for (let i = 0; i < coloresJuego.length; i++) {
                         opcionJugador = prompt(`Recuerda el color ${i + 1} (colores disponibles: ${coloresElegidos.join(", ")})`);
                         coloresJugador.push(opcionJugador);

                         if (coloresJugador[i] !== coloresJuego[i]) {
                              hasPerdido = true; 
                              alert("¡Has perdido! La secuencia era: " + coloresJuego.join(", "));
                              break;
                         }
                    }
                    if (!hasPerdido) {
                         coloresJugador = []; 
                         contadorRondas++;
                    }
               } while (contadorRondas < rondas && !hasPerdido);
               break;
          }

          default: {
               alert("Valor no válido");
               break;
          }
     }
}

function modoClasico(coloresBase) {
     let hasPerdido = false;
     let colorAleatorio;
     let coloresElegidos;
     let opcionJugador;
     let coloresJugador = [];
     let coloresJuego = [];
     let contadorRondas;
     let rondas = prompt("Escribe el número de rondas que quiere que dure el juego: ");
     let opcionModo = prompt("Escriba 1 para jugar con los colores que ya estan o 2 para elegirlos tú");

     switch (opcionModo) {
          case "1": {
               hasPerdido = false;
               contadorRondas = 0;
               coloresJuego = [];
               coloresJugador = [];

               do {
                    colorAleatorio = generarColorAleatorio(coloresBase);
                    coloresJuego.push(colorAleatorio);
                    alert("Colores en la secuencia: " + coloresJuego.join(", "));

                    for (let i = 0; i < coloresJuego.length; i++) {
                         opcionJugador = prompt(`Recuerda el color ${i + 1} (colores disponibles: ${coloresBase.join(", ")})`);
                         coloresJugador.push(opcionJugador);

                         if (coloresJugador[i] !== coloresJuego[i]) {
                              hasPerdido = true; 
                              alert("¡Has perdido! La secuencia era: " + coloresJuego.join(", "));
                              break;
                         }
                    }
                    if (!hasPerdido) {
                         coloresJugador = []; 
                         contadorRondas++;
                    }
               } while (contadorRondas < rondas && !hasPerdido);
               break;
          }

          case "2": {
               hasPerdido = false;
               contadorRondas = 0;
               coloresJuego = [];
               coloresJugador = [];
               coloresElegidos = generarColores();

               do {
                    colorAleatorio = generarColorAleatorio(coloresElegidos);
                    coloresJuego.push(colorAleatorio);
                    alert("Colores en la secuencia: " + coloresJuego.join(", "));

                    for (let i = 0; i < coloresJuego.length; i++) {
                         opcionJugador = prompt(`Recuerda el color ${i + 1} (colores disponibles: ${coloresElegidos.join(", ")})`);
                         coloresJugador.push(opcionJugador);

                         if (coloresJugador[i] !== coloresJuego[i]) {
                              hasPerdido = true; 
                              alert("¡Has perdido! La secuencia era: " + coloresJuego.join(", "));
                              break;
                         }
                    }
                    if (!hasPerdido) {
                         coloresJugador = []; 
                         contadorRondas++;
                    }
               } while (contadorRondas < rondas && !hasPerdido);
               break;
          }

          default: {
               alert("Valor no válido");
               break;
          }
     }
}

let modoJuego;
let coloresBase = ["azul", "rojo", "naranja", "amarillo"];

do {
     modoJuego = menuPrincipal();
     switch (modoJuego) {
          case "1": {
               modoClasico(coloresBase);
               break;
          }
          case "2": {
               modoSupervivencia();
               break;
          }
          case "3": {
               alert("El juego ha terminado");
               break;
          }
          default: {
               alert("No has elegido una opción válida");
          }
     }
} while (modoJuego !== "3");


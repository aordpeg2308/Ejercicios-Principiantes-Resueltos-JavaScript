const VIDAMAXIMA =50;
let vidaJugador = 50;
let vidaMonstruo = 35;
let cantidadPociones = 25;
let ataqueMaximoJugador = 5;
let ataqueMaximoEnemigo = 7;
let curacionMaximaPocion = 4;
let ataqueJugador;
let ataqueEnemigo;
let curacion;
let opción;
let busqueda;

do{
    alert(`Vida Jugador: ${vidaJugador}, Vida Monstruo: ${vidaMonstruo}, Pociones: ${cantidadPociones}`);
    
    opción = prompt("Elige una de las siguientes opciones: 1. ATACAR ENEMIGO. 2. TOMAR POCIÓN 3. BUSCAR POCIÓN 4. SALIR");

opción = parseInt(opción);
switch(opción){

    case 1:{
        ataqueJugador = atacar(ataqueMaximoJugador);

        if(ataqueJugador==ataqueMaximoJugador){
            alert("¡Has dado tu mejor golpe "+ataqueMaximoJugador+" de daño!");
        } else if(ataqueJugador==0){
            alert("Has fallado tu ataque");

        } else{

            alert("Has hecho "+ataqueJugador+" de daño");
        }
        vidaMonstruo = vidaMonstruo-ataqueJugador;

        break;

    }
    
    case 2:{

        if (vidaJugador ==VIDAMAXIMA){

            alert("No puedes curarte, estás al máximo");
        } else{
            curacion =tomarPocion(curacionMaximaPocion);

            alert("Te has curado "+curacion+"  puntos de vida");
            vidaJugador = vidaJugador+curacion;
        
        cantidadPociones-=1;
        }
        
        break;
    }

    case 3:{
            busqueda = buscarPocion();

            if(busqueda ==1){

                alert("Has encontrado una poción");
                cantidadPociones +=1;
            } else{
                alert ("No has encontrado ninguna poción");
            }
            break;
    }
    case 4: {
        alert("Has salido del juego");
        break;
    }
    default: alert("Acion no valida");
}

 if(opción!=4 &&vidaMonstruo>0){
    ataqueEnemigo = atacar(ataqueMaximoEnemigo);

    if(ataqueEnemigo==ataqueMaximoEnemigo){
        alert("¡El enemigo ha usado su mejor golpe "+ataqueMaximoEnemigo+" de daño!");
    } else if(ataqueEnemigo==0){
        alert("El enemigo ha fallado su ataque");

    } else{

        alert("El enemigo ha hecho "+ataqueEnemigo+" de daño");
    }
    vidaJugador = vidaJugador-ataqueEnemigo;
 }




} while(vidaJugador>0&&vidaMonstruo>0 && opción!=4);


function atacar( max) {
    return Math.floor(Math.random() * (max + 1));
  }
  function tomarPocion(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  function buscarPocion() {
    return Math.floor(Math.random() * 4) + 1;
  }
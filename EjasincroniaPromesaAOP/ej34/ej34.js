function temporizador2(){
console.log("Inicio del programa");
setTimeout(() => {
    console.log("Han pasado dos segundos")
}, 2000);
console.log("Fin del programa")
}

function temporizador5(){
    console.log("Inicio del programa");
    for ( let i=1; i<=5; i++ ){

        setTimeout(() => {
            console.log(`Han pasado ${i} segundos`)
        }, i*1000);
    }
    }

    

   

temporizador2();
console.log("Función numero 2")


temporizador5();
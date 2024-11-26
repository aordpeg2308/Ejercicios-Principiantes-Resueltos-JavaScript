const coches = ['🚗', '🏎️', '🚙', '🚓'];

function iniciarCarrera() {
    console.log("¡La carrera ha comenzado!");

    const apuesta = prompt("Elige un coche para apostar (1-🚗, 2-🏎️, 3-🚙, 4-🚓):"); //Lo primero es elegir el coche que creemos que gana
    const cocheApostado = coches[parseInt(apuesta) - 1];
    console.log(`Apostaste por el coche: ${cocheApostado}`);

    const cochesPromesas = coches.map((coche) => simularCarrera(coche)); // Con esto hacemos que todos los coches empiecen la carrea

    coches.forEach(coche => console.log(`${coche} comienza la carrera...`));

    Promise.race(cochesPromesas) //Aqui vemos que promesa se hace antes, es decir el coche ganador
        .then(ganador => {
            console.log(`¡El ganador es: ${ganador}!`);
            
            if (ganador === cocheApostado) {
                console.log("¡Felicidades! Has ganado la apuesta.");
            } else {
                console.log("Lo siento, perdiste la apuesta.");
            }
        })
        .catch(err => console.log("Error en la carrera: ", err));

    Promise.all(cochesPromesas) //Al contrario al race aqui si esperamos que termine toda las promesas, con esto puedo meter el ranking
        .then(clasificacion => {
            console.log("\nClasificación final:");
            clasificacion.forEach((coche, index) => {
                console.log(`${index + 1} - ${coche}`);
            });
        })
        .catch(err => console.log("Error en la clasificación: ", err));
}

function simularCarrera(coche) {
    return new Promise((resolve, reject) => {
        
        const tiempoBase = Math.random() * (5000 - 3000) + 3000;

        const eventos = ["lluvia", "avería", "ninguno"]; //Lo utilizare para aumentar el tiempo del selftime ou
        const evento = eventos[Math.floor(Math.random() * eventos.length)];

        let tiempoTotal = tiempoBase;

        setTimeout(() => {
            if (evento === "lluvia") {
                console.log(`${coche} se ha visto afectado por lluvia.`);
                tiempoTotal += 1000;  
            } else if (evento === "avería") {
                console.log(`${coche} ha tenido una avería.`);
                tiempoTotal += 3000; 
            }

            resolve(coche);
        }, tiempoTotal);
    });
}

iniciarCarrera();

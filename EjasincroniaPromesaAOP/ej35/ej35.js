let puntos = 0;

function numeroAleatorioEntre010() {
    return Math.floor(Math.random() * (10 + 1));
}

function ruleta() {
    return new Promise((resolve, reject) => {
        let segundos = Math.floor(Math.random() * 3) + 1;
        setTimeout(() => {
            console.log("La ruleta está girando...");
            let numeroRuleta = numeroAleatorioEntre010();
            if (numeroRuleta > 0) {
                puntos += numeroRuleta;
                resolve(`¡Tenemos un ganador! Ha salido: ${numeroRuleta}. Tienes ${puntos} puntos.`);
            } else {
                reject("La ruleta se ha atascado.");
            }
        }, segundos * 1000);
    });
}

function jugarRuleta(rondas) {
    for (let i = 1; i <= rondas; i++) {
        ruleta()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

const numeroRondas = parseInt(prompt("Escribe el número de veces que quieras jugar"), 10);
jugarRuleta(numeroRondas);

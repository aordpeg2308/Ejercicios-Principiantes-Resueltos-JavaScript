class Configuracion {
    static instancia = null;

    constructor(config) {
        if (!Configuracion.instancia) {
            this.config = config;
            Configuracion.instancia = this;
        }
        return Configuracion.instancia;
    }

    obtenerConfig() {
        return this.config;
    }
}


const configuracion1 = new Configuracion({ modo: 'producción', puerto: 3000 });
const configuracion2 = new Configuracion({ modo: 'desarrollo', puerto: 8080 });

console.log(configuracion1.obtenerConfig()); 
console.log(configuracion2.obtenerConfig()); 

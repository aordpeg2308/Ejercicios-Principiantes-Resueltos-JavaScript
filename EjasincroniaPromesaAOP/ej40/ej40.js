class Cache {
    constructor(tiempo) {
      this.resultados = new Map();
      this.tiempoExpiracion = tiempo;
    }
  
    vaciarResultados() {
      this.resultados = new Map();
    }
  
    aniadirResultado(nombre, contenido) {
      this.resultados.set(nombre, contenido);
    }
  }
  
 
  function obtenerDatosCacheHastaExpiracion(cache) {
    return new Promise((resolve, reject) => {
      const tiempoDeExpiracion = cache.tiempoExpiracion;
  
      
      const intervalo = setInterval(() => {
        if (cache.resultados.size > 0) {
            cache.resultados.forEach((contenido, nombre) => {
                console.log(`${nombre}: ${contenido}`);
              });
        } else {
          console.log("La caché está vacía.");
        }
      }, 1000);
  
      
      setTimeout(() => {
        clearInterval(intervalo);  
        cache.vaciarResultados();  
        console.log("La caché ha expirado y ha sido vaciada.");
        resolve();  
      }, tiempoDeExpiracion);
    });
  }
  
  
  const cache = new Cache(5000); 
  
  cache.aniadirResultado("NombreUsuario", "CapibaraMaster");
  cache.aniadirResultado("Contrasenia", "churro234");
  
  obtenerDatosCacheHastaExpiracion(cache)
    .then(() => {
      console.log("Proceso finalizado.");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  
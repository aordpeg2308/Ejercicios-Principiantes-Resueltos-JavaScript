const cachePotencias = new WeakMap(); // Creamos un WeakMap para almacenar los resultados de potencias

// Función generadora para calcular potencias
function* generadorPotencias(base) {
  let exponente = 1; 
  while (true) {
    const exponenteObj = { value: exponente }; 
    if (cachePotencias.has(exponenteObj)) {
      console.log(`Usando caché para la potencia de ${base}^${exponente}`);
      yield cachePotencias.get(exponenteObj); 
    } else {
      const resultado = Math.pow(base, exponente);
      cachePotencias.set(exponenteObj, resultado); 
      console.log(`Calculando la potencia de ${base}^${exponente}`);
      yield resultado;
    }
    exponente++; 
  }
}


const generadorDePotenciasDeDos = generadorPotencias(2);

console.log(generadorDePotenciasDeDos.next().value); 
console.log(generadorDePotenciasDeDos.next().value); 
console.log(generadorDePotenciasDeDos.next().value); 
console.log(generadorDePotenciasDeDos.next().value); 
console.log(generadorDePotenciasDeDos.next().value); 
console.log(generadorDePotenciasDeDos.next().value); 

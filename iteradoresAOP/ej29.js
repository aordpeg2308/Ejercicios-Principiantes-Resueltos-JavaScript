
//El primer paso es crear el iterador Esteban
const pares = {
    [Symbol.iterator]() {
      let current = 0; //Lo inicializo en 0 para que muestre primero el 2
      return {
        next() {
          current += 2; // Incrementamos de dos en dos para asi solo imprimer los pares
          return { value: current, done: false }; // Si pone false, solo lo hace una vez, si pone true siempre se ejecuta
        }
      };
    }
  };
  
  // Usando el iterador en un bucle for...of
  for (const num of pares) {
    if (num > 23) break; // Detenemos después de 23 porque sino esto sería infinito Esteban 
    console.log(num); // Imprimira desde el 2 hasta el 22
  }
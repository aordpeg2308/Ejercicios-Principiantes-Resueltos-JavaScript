//Primero creamos el WeakMap

const cache = new WeakMap();


//Generamos la siguiente funcion Esteban, la cual recibe un objeto que es lo que se almacenara


function fetchData(obj) {
  if (cache.has(obj)) { // si ya ha recibido ese objeto, lo devuelve
    console.log("Usando datos en caché.");
    return cache.get(obj);
  } else { // sino lo almacena con los datos
    const result = { data: `Resultado para ${JSON.stringify(obj)}` };
    cache.set(obj, result);
    console.log("Datos almacenados en caché.");
    return result;
  }
}


const shin = { nombre: "Shin", tipo: "gato", id: 1 };
const churro = { nombre: "Churro", tipo: "capibara", id: 2 };

console.log(fetchData(shin)); //lo almazenamos
console.log(fetchData(shin)); // lo usamos

console.log(fetchData(churro)); 
console.log(fetchData(churro)); 
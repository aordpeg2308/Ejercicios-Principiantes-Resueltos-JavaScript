let coche = new Map()
coche.set('Marca', "Citroen");
coche.set('Modelo',"Sara");
coche.set('año',1999);
console.log(coche.has('Modelo')?"Si existe":"No existe"); // Con un ternario imprimira si existe si es true y no si es false.
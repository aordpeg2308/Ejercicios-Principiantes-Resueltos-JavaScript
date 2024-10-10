function ComprobarMapa(mapa1, mapa2) {
   
    if (mapa1.size !== mapa2.size) {
        return false;
    }

   
    for (let [clave, valor] of mapa1) {
        if (!mapa2.has(clave) || mapa2.get(clave) !== valor) {
            return false;
        }
    }

    return true;
}
let mapa1 = new Map();
let mapa2 = new Map();

mapa1.set("Nombre","Alejandro");
mapa1.set("Edad",27);
mapa2.set("Nombre","Alejandro");
mapa2.set("Edad",27);
console.log(ComprobarMapa(mapa1,mapa2)?"Son iguales":"Son distintos");
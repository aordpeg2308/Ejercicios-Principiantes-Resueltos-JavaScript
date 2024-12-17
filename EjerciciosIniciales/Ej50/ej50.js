let arrayObjetos = [
    { id: 1, nombre: 'Objeto 1' },
    { id: 2, nombre: 'Objeto 2' },
    { id: 1, nombre: 'Objeto 1 duplicado' },
    { id: 3, nombre: 'Objeto 3' },
    { id: 2, nombre: 'Objeto 2 duplicado' }
];

let idsUnicos = new Set();
let objetosUnicos = arrayObjetos.filter(objeto => {
    if (!idsUnicos.has(objeto.id)) {
        idsUnicos.add(objeto.id);
        return true; 
    }
    return false; 
});

console.log(objetosUnicos);

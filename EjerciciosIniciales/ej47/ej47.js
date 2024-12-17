let conjunto1 = new Set([1, 2, 3]);
let conjunto2 = new Set([2, 3, 4]);

let interseccion = new Set([...conjunto1].filter(valor => conjunto2.has(valor)));

console.log(interseccion);

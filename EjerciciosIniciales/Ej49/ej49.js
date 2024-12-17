let conjunto1 = new Set([1, 2]);
let conjunto2 = new Set([1, 2, 3, 4]);

let esSubconjunto = [...conjunto1].every(valor => conjunto2.has(valor));

console.log(esSubconjunto);

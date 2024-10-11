let conjunto1 = new Set([1, 2, 3]);
let conjunto2 = new Set([3, 4, 5]);

let diferencia = new Set([...conjunto1].filter(valor => !conjunto2.has(valor)));

console.log(diferencia);

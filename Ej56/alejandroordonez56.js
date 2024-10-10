let persona = new Map([
    ['nombre', "Esteban"],
    ['edad', 43],
    ['profesion', "Profesor frontend"]
  ]);
  
  let arrayDelMap = Array.from(persona, ([clave, valor]) => ({ clave, valor })); // Con esta funcion flecha creo el array
  
  console.log(arrayDelMap);
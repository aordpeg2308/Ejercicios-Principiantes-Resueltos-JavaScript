
const alumnos = [
    { nombre: 'Alejandro', edad: 27, nota: 8 },
    { nombre: 'Jesus', edad: 22, nota: 7 },
    { nombre: 'Adrian', edad: 22, nota: 10 }
  ];
  
 
  for (let alumno of alumnos) {
    if (alumno.nota > 8) {
      console.log(alumno.nombre);
    }
  }
  
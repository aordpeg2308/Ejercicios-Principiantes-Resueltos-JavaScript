
let toDoList = ["Comprar comida", "Hacer ejercicio", "Limpiar la casa", "Estudiar programación", "Llamar a mamá"];
console.log(toDoList);

let tareaABorrar = "Limpiar la casa";
let posicion= toDoList.indexOf(tareaABorrar);

if (posicion !== -1) {

  toDoList.splice(posicion, 1);
  console.log(`Tarea "${tareaABorrar}" eliminada del toDoList.`);
} else {
  console.log(`Tarea "${tareaABorrar}" no encontrada.`);
}


console.log("toDoList actualizado:", toDoList);
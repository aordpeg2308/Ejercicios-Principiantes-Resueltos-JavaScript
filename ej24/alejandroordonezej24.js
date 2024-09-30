let listadeTareas = [];
let opcion;
do {
    opcion = prompt("Elige una de las siguientes opciones: 1 para Agregar tarea, 2 para modificarla, 3 para eliminar tareas, 4 para ver tareas y 5 para salir");
    opcion = parseInt(opcion);
    
    switch (opcion) {
        case 1: { 
            let tarea = prompt("Introduce el nombre de la tarea: ");

            let tareaExiste = false;
            for (let i = 0; i < listadeTareas.length; i++) {
                if (listadeTareas[i] === tarea) {
                    tareaExiste = true;
                    alert("No puedes crear esa tarea porque ya existe una con ese nombre");
                    break;
                }
            }
            if (!tareaExiste) {
                listadeTareas.push(tarea);
            }
            break;
        }

        case 2: { 
            let nombreTarea = prompt("Introduce el nombre de la tarea que quieres cambiar el nombre:");
            let tareaEncontrada = false;

            for (let i = 0; i < listadeTareas.length; i++) {
                if (listadeTareas[i] === nombreTarea) {
                    tareaEncontrada = true;
                    let nuevoNombre = prompt("Introduce el nuevo nombre de la tarea: ");
                    
                    for (let j = 0; j < listadeTareas.length; j++) {
                        if (listadeTareas[j] === nuevoNombre) {
                            alert("No puedes poner ese nombre porque ya existe una tarea con ese nombre");
                            break;
                        }
                    }

                    if (!listadeTareas.includes(nuevoNombre)) {
                        listadeTareas[i] = nuevoNombre;
                        alert("Tarea cambiada");
                    }
                    break;
                }
            }
            if (!tareaEncontrada) {
                alert("No hemos encontrado una tarea con ese nombre");
            }
            break;
        }

        case 3: {
            let nombreTarea = prompt("Introduce el nombre de la tarea que quieres eliminar:");
            let tareaEncontrada = false;

            for (let i = 0; i < listadeTareas.length; i++) {
                if (listadeTareas[i] === nombreTarea) {
                    listadeTareas.splice(i, 1);
                    alert("Tarea eliminada");
                    tareaEncontrada = true;
                    break;
                }
            }

            if (!tareaEncontrada) {
                alert("No hemos encontrado una tarea con ese nombre");
            }
            break;
        }

        case 4: {
            if (listadeTareas.length < 1) {
                alert("No hay ninguna tarea creada");
            } else {
                for (let tarea of listadeTareas) {
                    alert(tarea);
                }
            }
            break;
        }

        case 5: {
           alert("Adiós.");
            break;
        }

        default: {
            alert("Valor no válido");
            break;
        }
    }

} while (opcion != 5);
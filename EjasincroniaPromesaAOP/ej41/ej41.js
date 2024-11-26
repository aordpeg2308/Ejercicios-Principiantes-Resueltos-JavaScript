// Lo primero que hago es crear la clase Mesa
class Mesa {
    constructor(nombre, numeroAsistentes) {
        this.nombre = nombre;
        this.numeroAsistentes = numeroAsistentes;
        this.disponible = true;
    }

    // Funcion para reservar la mesa, si no esta disponible lleva al reject
    reservar() {
        return new Promise((resolve, reject) => {
            if (this.disponible) {
                this.disponible = false;
                setTimeout(() => {
                    resolve(`${this.nombre} reservada con éxito para ${this.numeroAsistentes} personas.`);
                }, 1000);
            } else {
                reject(`${this.nombre} no está disponible en este momento.`);
            }
        });
    }

    // Funcion que utilizada cuando la mesa esta disponible
    liberar() {
        return new Promise((resolve) => {
            this.disponible = true;
            setTimeout(() => {
                resolve(`${this.nombre} ha sido liberada.`);
            }, 500);
        });
    }
}

// Ahora creo la clase SistemasReservas, podria ser tambien restaurante.
class SistemaReservas {
    constructor() {
        this.mesas = [];
    }

    agregarMesa(mesa) {
        this.mesas.push(mesa);
    }

    mostrarMesas() {
        const contenedorMesas = document.getElementById('mesas');
        contenedorMesas.innerHTML = ''; // Limpiar el contenedor de mesas
        this.mesas.forEach(mesa => {
            const divMesa = document.createElement('div');
            divMesa.classList.add('mesa');
            divMesa.classList.add(mesa.disponible ? 'disponible' : 'ocupada');
            divMesa.innerHTML = `
                <h3>${mesa.nombre}</h3>
                <p>${mesa.disponible ? 'Disponible' : 'Ocupada'}</p>
            `;
            // Añadir un evento para reservar cuando se hace clic en la mesa
            divMesa.addEventListener('click', () => {
                this.reservarMesa(mesa);
            });
            contenedorMesas.appendChild(divMesa);
        });
    }

    // Método para realizar la reserva de una mesa específica
    verificarDisponibilidad(mesa) {
        return mesa.reservar()
            .then(result => result)
            .catch(err => err);
    }

    // Función para reservar una mesa
    reservarMesa(mesa) {
        this.verificarDisponibilidad(mesa)
            .then(mensaje => {
                this.mostrarMesas(); // Actualizar el estado de las mesas en la interfaz
                document.getElementById('estado').innerText = mensaje; // Mostrar el mensaje de reserva
            })
            .catch(err => {
                this.mostrarMesas(); // Actualizar la interfaz en caso de error
                document.getElementById('estado').innerText = err; // Mostrar el error de reserva
            });
    }

    // buscamos la mesa por su nombre 
    liberarMesa(nombreMesa) {
        const mesa = this.mesas.find(mesa => mesa.nombre === nombreMesa);
        if (mesa) {
            mesa.liberar().then(mensaje => {
                this.mostrarMesas(); // Actualizar la interfaz después de liberar la mesa
                document.getElementById('estado').innerText = mensaje; // Mostrar el mensaje de liberación
            });
        } else {
            document.getElementById('estado').innerText = `La mesa ${nombreMesa} no existe.`;
        }
    }
}

const sistema = new SistemaReservas();
sistema.agregarMesa(new Mesa("Mesa 1", 2));
sistema.agregarMesa(new Mesa("Mesa 2", 4));
sistema.agregarMesa(new Mesa("Mesa 3", 6));

sistema.mostrarMesas();


document.getElementById('liberarBtn').addEventListener('click', () => {
    const nombreMesa = prompt('¿Qué mesa quieres liberar?');
    if (nombreMesa) {
        sistema.liberarMesa(nombreMesa);
    }
});





//Me ha ayudado Alex con esta funcion por  si mi codigo se parece al suyo
function getUsuariosFetch() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((usuarios) => {
            const tabla = document.querySelector("#userTableFetch tbody"); 
            tabla.innerHTML = ""; 

            usuarios.forEach((usuario) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.name}</td>
                    <td>${usuario.email}</td>
                    <td>
                        <button class="delete-btn" onclick="eliminarUsuario(${usuario.id}, 'userTableFetch')">Eliminar</button>
                        <button onclick="mostrarDetalles(${usuario.id})">Detalles</button>
                    </td>
                `;
                tabla.appendChild(tr); 
            });
        })
        .catch((error) => console.error("Error al obtener usuarios:", error));
}

async function getUsuariosAxio() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        const usuarios = response.data;
        const tabla = document.querySelector("#userTableAxios tbody"); 
        tabla.innerHTML = ""; 
    
        usuarios.forEach((usuario) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.name}</td>
                <td>${usuario.email}</td>
                <td>
                    <button class="delete-btn" onclick="eliminarUsuario(${usuario.id}, 'userTableAxios')">Eliminar</button>
                    <button onclick="mostrarDetalles(${usuario.id})">Detalles</button>
                </td>
            `;
            tabla.appendChild(tr); 
        });
    }).catch((error) => {
        console.error('Axios error:', error);
    });
}



function eliminarUsuario(id, tablaId) {
    const tabla = document.querySelector(`#${tablaId} tbody`);
    const filas = tabla.querySelectorAll("tr");

    filas.forEach((fila) => {
        const idFila = parseInt(fila.querySelector("td").textContent);
        if (idFila === id) {
            tabla.removeChild(fila);
        }
    });
}

function mostrarDetalles(id) {
    const usuarios = [];
    ["userTableFetch", "userTableAxios"].forEach((tablaId) => {
        const tabla = document.querySelector(`#${tablaId} tbody`);
        tabla.querySelectorAll("tr").forEach((fila) => {
            const idFila = parseInt(fila.querySelector("td").textContent);
            if (idFila === id) {
                usuarios.push({
                    id: idFila,
                    name: fila.children[1].textContent,
                    email: fila.children[2].textContent
                });
            }
        });
    });

    if (usuarios.length > 0) {
        const usuario = usuarios[0];
        alert(`Detalles del usuario:\n\nID: ${usuario.id}\nNombre: ${usuario.name}\nEmail: ${usuario.email}`);
    } else {
        alert("Usuario no encontrado.");
    }
}

// Me faltaria añadir pero no se hacerlo Esteban

getUsuariosFetch();

getUsuariosAxio();


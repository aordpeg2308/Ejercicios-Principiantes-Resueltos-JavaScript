const usuario = {
    nombre: "Usuario",
    edad: 20,
    email: "usuario@test.com",
    password: "123456"
};

function verificarEdad(usuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Comprobando edad...");
            if (usuario.edad >= 18) {
                resolve(usuario);
            } else {
                reject("No tiene la edad suficiente");
            }
        }, 1000);
    });
}

function verificarCorreo(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Comprobando correo...");
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
            if (regex.test(usuario.email)) {
                resolve(usuario);
            } else {
                reject("El correo no tiene el formato adecuado.");
            }
        }, 1000);
    });
}

function verificarPassword(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Verificando contraseña...");
            const regex = /^(?=.*\d).{6,}$/;
            if (regex.test(usuario.password)) {
                resolve(usuario);
            } else {
                reject("La contraseña debe tener al menos 6 caracteres y contener un número.");
            }
        }, 1000);
    });
}


function actualizarProgreso(porcentaje) {
    const barra = document.getElementById('progreso');
    barra.style.width = porcentaje + '%';
    barra.textContent = porcentaje + '%';
}


function verificarUsuario(usuario) {
    verificarEdad(usuario)
        .then(() => {
            
            actualizarProgreso(25);
            return verificarCorreo(usuario);
        })
        .then(() => {
            
            actualizarProgreso(50);
            return verificarPassword(usuario);
        })
        .then(() => {
            
            actualizarProgreso(100);
            console.log("El usuario está validado correctamente");
        })
        .catch(error => {
            
            console.log("Error:", error);
            actualizarProgreso(0);
        });
}


verificarUsuario(usuario);

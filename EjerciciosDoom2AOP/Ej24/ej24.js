document.getElementById("validationForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    let valid = true;

    if (nombre.value.length < 3) {
        document.getElementById("nombreError").textContent = "Nombre debe tener al menos 3 caracteres";
        valid = false;
    } else {
        document.getElementById("nombreError").textContent = "";
    }
    
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById("emailError").textContent = "Email no válido";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    const telefonoRegex = /^\d{9}$/;
    if (!telefonoRegex.test(telefono.value)) {
        document.getElementById("telefonoError").textContent = "Teléfono debe tener 9 dígitos";
        valid = false;
    } else {
        document.getElementById("telefonoError").textContent = "";
    }

    if (valid) alert("Formulario válido!");
});
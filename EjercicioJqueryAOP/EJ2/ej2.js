function comprobarFormulario(event) {
    event.preventDefault(); // Esto hace que no se refresque el formulario sino no hace na jajaja

    
    let nombreUsuario = $("#nombre").val().trim();
    let contraseniaUsuario = $("#password").val();
    let emailUsuario = $("#email").val();

   
    let formularioValido = true;

    
    if (nombreUsuario === "") {
        $("#nombreError").show();
        formularioValido = false;
    } else {
        $("#nombreError").hide();
    }

   
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailUsuario)) {
        $("#emailError").show();
        formularioValido = false;
    } else {
        $("#emailError").hide();
    }

  
    if (contraseniaUsuario.length < 6) {
        $("#passwordError").show();
        formularioValido = false;
    } else {
        $("#passwordError").hide();
    }

    
}


$("#registroForm").on("submit", comprobarFormulario);

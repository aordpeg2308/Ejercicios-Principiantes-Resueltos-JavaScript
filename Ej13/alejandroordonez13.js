let contraseña = "capibara";
let contraseñaIntroducido = prompt("Introduzca su contraseña");
let intentos = 1;


while (intentos < 3 && contraseñaIntroducido !== contraseña) {
    contraseñaIntroducido = prompt("Lo siento, no has acertado. Introduce de nuevo la contraseña: ");
    intentos++;
}

if (contraseñaIntroducido === contraseña) {
    alert("Bienvenido");
} else {
    alert("Inicio de sesión fallido");
}
function generarPalabra(array) {
  let indicePalabra = Math.floor(Math.random() * array.length);
  let palabra = array[indicePalabra];
  return palabra;
}
let palabras = ["capibara", "chocolate", "churro", "java"];
let palabra = generarPalabra(palabras);
let palabraAsterisco = "*".repeat(palabra.length);
let arraycensurada = [...palabraAsterisco];
let vidas = 6;
let hasAcertado = false;
let eleccionUsuario;
do {
  alert(
    "Adivina la palabra:  " +
      palabraAsterisco +
      " te quedan " +
      vidas +
      " vidas \n"
  );
  eleccionUsuario = prompt("Introduce una letra o palabra: ");
  eleccionUsuario = eleccionUsuario.toLowerCase();
  if (eleccionUsuario.length < 1) {
    alert(" No has introducido nada");
  } else if (eleccionUsuario.length > 1) {
    if (eleccionUsuario == palabra) {
      alert("Has acertado :)");
      hasAcertado = true;
    } else {
      alert("Has perdido ");
      vidas = 0;
    }
  } else {
    if (palabra.includes(eleccionUsuario)) {
      for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == eleccionUsuario) {
          arraycensurada[i] = eleccionUsuario;
        }
      }
      palabraAsterisco = arraycensurada.join("");
    } else {
      alert("No contiene la letra " + eleccionUsuario);
      vidas--;
    }
  }
} while (vidas > 0 && !hasAcertado);

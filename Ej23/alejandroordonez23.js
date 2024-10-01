let canciones = [];
let continuar = true;

while (continuar) {
  let opcion = prompt(`Elige una opción:
1. AGREGAR CANCION
2. BUSCAR CANCIONES
3. LISTAR ARTISTAS
4. SALIR`);

  switch (opcion) {
    case '1':
      let input = prompt("Ingrese el nombre de la canción y el artista, separados por una coma (Ejemplo: Africa, Toto): ");
      let datos = input.split(',');
      if (datos.length === 2) {
        let cancion = datos[0].trim();
        let artista = datos[1].trim();
        canciones.push({ cancion: cancion, artista: artista });
        console.log(`Canción agregada: ${cancion} de ${artista}`);
      } else {
        console.log("Entrada inválida.");
      }
      break;

    case '2':
      let artistaBuscado = prompt("Ingrese el nombre del artista para buscar sus canciones: ").trim();
      let cancionesArtista = [];
      for (let i = 0; i < canciones.length; i++) {
        if (canciones[i].artista.toLowerCase() === artistaBuscado.toLowerCase()) {
          cancionesArtista.push(canciones[i].cancion);
        }
      }
      if (cancionesArtista.length > 0) {
        console.log(`Canciones de ${artistaBuscado}:`);
        for (let i = 0; i < cancionesArtista.length; i++) {
          console.log(`- ${cancionesArtista[i]}`);
        }
      } else {
        console.log(`No se encontraron canciones de ${artistaBuscado}.`);
      }
      break;

    case '3':
      let artistas = [];
      for (let i = 0; i < canciones.length; i++) {
        if (!artistas.includes(canciones[i].artista)) {
          artistas.push(canciones[i].artista);
        }
      }
      if (artistas.length > 0) {
        console.log("Artistas:");
        for (let i = 0; i < artistas.length; i++) {
          console.log(`- ${artistas[i]}`);
        }
      } else {
        console.log("No hay artistas en la lista.");
      }
      break;

    case '4':
      continuar = false;
      console.log("Saliendo del programa...");
      break;

    default:
      console.log("Opción no válida.");
  }
}

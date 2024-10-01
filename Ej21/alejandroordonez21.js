const tablero = [
    ['📦', '💣', '💣'],
    ['📦', '📦', '📦'],
    ['💣', '📦', '📦']
  ];
  
  let tableroVisible = [
    ['📦', '📦', '📦'],
    ['📦', '📦', '📦'],
    ['📦', '📦', '📦']
  ];
  
  let casillasVacias = 0;
  for (let fila of tablero) {
    for (let celda of fila) {
      if (celda === '📦') {
        casillasVacias++;
      }
    }
  }
  
  for (let fila of tableroVisible) {
    console.log(fila.join(' '));
  }
  
  let casillasDescubiertas = 0;
  let jugando = true;
  
  while (jugando) {
    
    let input = prompt("Ingrese una coordenada (fila,columna): ");
    
    
    let coordenadas = input.split(',');
    
    
    let fila = parseInt(coordenadas[0], 10);  
    let columna = parseInt(coordenadas[1], 10);  
    
    
    if (fila >= 0 && fila < tablero.length && columna >= 0 && columna < tablero[fila].length) {
     

      if (tablero[fila][columna] === '💣') {
        tableroVisible[fila][columna] = '💥';
        console.log("¡Oh no! ¡Has encontrado una bomba! ¡Perdiste!");
        jugando = false;
      } 
      
      
      else if (tablero[fila][columna] === '📦') {
        tableroVisible[fila][columna] = '💨';
        casillasDescubiertas++;
  
        
        if (casillasDescubiertas === casillasVacias) {
          console.log("¡Felicidades! ¡Has descubierto todas las casillas vacías! ¡Ganaste!");
          jugando = false;
        } else {
          console.log("La caja está vacía. Sigue jugando.");
        }
      }
  
     
      for (let filaVisible of tableroVisible) {
        console.log(filaVisible.join(' '));
      }
    } else {
      console.log("Coordenada no válida. Inténtalo de nuevo.");
    }
  }
  
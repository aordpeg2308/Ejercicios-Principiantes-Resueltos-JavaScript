const tablero = [
    ['🌱', '🌱', '🍎', '🌱', '🌱'],
    ['🍎', '🧱', '🌱', '🧱', '🍎'],
    ['🌱', '🧱', '🐍', '🌱', '🌱'],
    ['🌱', '🍎', '🌱', '🧱', '🌱'],
    ['🍎', '🌱', '🌱', '🍎', '🧱'],
    ['🌱', '🌱', '🌱', '🌱', '🍎'],
  ];
  
 
  let viboraX = 2;
  let viboraY = 2;
  
 
  let manzanasRestantes = 0;
  for (let fila of tablero) {
    for (let celda of fila) {
      if (celda === '🍎') manzanasRestantes++;
    }
  }
  
  for (let fila of tablero) {
    console.log(fila.join(' '));
  }
  console.log(`Manzanas restantes: ${manzanasRestantes}`);
  
  let jugando = true;
  
  while (jugando) {
   
    let direccion = prompt("Ingrese una dirección (ARRIBA, ABAJO, IZQUIERDA, DERECHA): ").toUpperCase();
  
    let nuevaX = viboraX;
    let nuevaY = viboraY;
  
  
    if (direccion === 'ARRIBA') {
      nuevaX = (viboraX - 1 + tablero.length) % tablero.length;
    } else if (direccion === 'ABAJO') {
      nuevaX = (viboraX + 1) % tablero.length;
    } else if (direccion === 'IZQUIERDA') {
      nuevaY = (viboraY - 1 + tablero[0].length) % tablero[0].length;
    } else if (direccion === 'DERECHA') {
      nuevaY = (viboraY + 1) % tablero[0].length;
    } else {
      console.log("Dirección inválida. Intente nuevamente.");
      continue;
    }
  
    
    if (tablero[nuevaX][nuevaY] === '🧱') {
      console.log("¡Hay un ladrillo! No puedes avanzar.");
      continue;
    }
  
  
    if (tablero[nuevaX][nuevaY] === '🍎') {
      manzanasRestantes--;
      console.log("¡Te comiste una manzana!");
    }
  
    tablero[viboraX][viboraY] = '🌱'; 
    viboraX = nuevaX;
    viboraY = nuevaY;
    tablero[viboraX][viboraY] = '🐍'; 
  
   
    for (let fila of tablero) {
      console.log(fila.join(' '));
    }
    console.log(`Manzanas restantes: ${manzanasRestantes}`);
  
    
    if (manzanasRestantes === 0) {
      console.log("¡Has comido todas las manzanas! ¡Ganaste!");
      jugando = false;
    }
  }
  
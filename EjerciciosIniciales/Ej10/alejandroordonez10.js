let  peliculaElegida = prompt("Elige el número de las siguientes pelicluas: <p> 1 Pulp Fiction</p> <p> 2 Sin-Chan en busca de las bolas perdidas</p><p> 3 Mulan</p>");
peliculaElegida =  parseInt(peliculaElegida);
switch(peliculaElegida){
case 1 :{
alert ("Su ticket ha sido emitido");
document.write(`
    <div style="text-align: center; margin-bottom: 20px;">
      <h2>Pulp Fiction</h2>
      <img src="pulpfiction.jpg" alt="Pulp Fiction" width="200" height="300">
      <p>Una película de culto dirigida por Quentin Tarantino que sigue historias entrelazadas de crimen, violencia y redención en Los Ángeles.</p>
    </div>
  `);
  break;
}
case 2: {
    alert ("Su ticket ha sido emitido");
    document.write(`
        <div style="text-align: center; margin-bottom: 20px;">
          <h2>Shin Chan y las bolas perdidas</h2>
          <img src="shinchan.jpg" alt="Shin Chan y las bolas perdidas" width="200" height="300">
          <p>Shin Chan y sus amigos están en una nueva aventura, en la que se enfrentan a situaciones cómicas mientras buscan unas misteriosas bolas perdidas.</p>
        </div>
      `);
      break;
}
case 3:{

    document.write(`
        <div style="text-align: center; margin-bottom: 20px;">
          <h2>Mulán</h2>
          <img src="mulan.jpg" alt="Mulán" width="200" height="300">
          <p>Mulán, una joven valiente, se disfraza de hombre para tomar el lugar de su padre en el ejército y defender a su país en una épica aventura.</p>
        </div>
      `);
      break;
}

default: alert("No has selecionado  ninguna pelicula")

}
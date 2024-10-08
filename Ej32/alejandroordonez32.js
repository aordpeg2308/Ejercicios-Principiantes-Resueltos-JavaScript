
const libro = {
    titulo: 'El archivo de las tormentas: El camino de los reyes',
    autor: 'Brandon Sanderson',
    año: 2010
  };
  
 
  for (let propiedad in libro) {
    console.log(propiedad +" "+ libro[propiedad]);
  }
  
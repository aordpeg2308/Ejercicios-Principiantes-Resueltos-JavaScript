const paginasVisitadas = new WeakSet(); 

function registrarVisita(pagina) { //Esta funcion recibe una pagina 
  if (paginasVisitadas.has(pagina)) {   //si la pagina esta en el Weakset pues no dice que esta
    console.log(`La página ${pagina.url} ya ha sido visitada.`);
  } else {
    paginasVisitadas.add(pagina); //sino pues la añade 
    console.log(`Visita registrada para la página: ${pagina.url}`);
  }
}


const pagina1 = { url: 'https://web.iesfernandoiii.es/', titulo: 'Instituto' };
const pagina2 = { url: 'https://zoobarcelona.cat/es/animales/capibara', titulo: 'Capibaras' };


registrarVisita(pagina1); 
registrarVisita(pagina2); 
registrarVisita(pagina1); 

// Ahora vamos a eliminar las referencias para probar el recolector de basura
pagina1 = null; // Eliminamos la referencia a pagina1
pagina2 = null; // Eliminamos la referencia a pagina2



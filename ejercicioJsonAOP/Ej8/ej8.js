
function obtenerNacionalidad() {
    
    const nombre = prompt("Introduce un nombre:");
    
    if (!nombre) {
        alert("No se ha ingresado ningún nombre.");
        return;
    }
    
    
    const url = `https://api.nationalize.io/?name=${nombre}`;
    
    
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
        
            
            if (data.country && data.country.length > 0) {
                
                const paisMasProbable = data.country.reduce((max, pais) => {
                    return pais.probability > max.probability ? pais : max;
                });
                
               
                alert(`El país con mayor probabilidad es: ${paisMasProbable.country_id} con una probabilidad de ${Math.round(paisMasProbable.probability * 100)}%`);
            } else {
           
                alert("No se encontraron resultados para el nombre ingresado.");
            }
        })
        .catch(error => {
            console.error("Error al llamar a la API:", error);
            alert("Hubo un problema al obtener la nacionalidad. Por favor, inténtalo de nuevo más tarde.");
        });
}


obtenerNacionalidad();

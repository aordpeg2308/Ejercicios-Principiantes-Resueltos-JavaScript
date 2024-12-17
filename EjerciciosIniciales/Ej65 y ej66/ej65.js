async function ejecutarPeticion(exito) {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Petición exitosa: Datos recibidos.");
            } else {
                reject( new Error ("  no se ha cargado"));
            }
        }, 1000);
    });

    try {
        let respuesta = await promesa;
        console.log(respuesta);
    } catch (error) {
        console.error("Error:" +error.message);
    } finally {
        console.log("La petición ha terminado.");
    }
}


ejecutarPeticion(true);  
ejecutarPeticion(false); 

let mapaNuevo = new Map (); //Primer paso lo creo vacio Esteban
mapaNuevo.set('nombre',"Alejandro"); //Primero clave valor.
mapaNuevo.set('edad',27); //Segunda clave;
mapaNuevo.set('ciudad',"Martos");

mapaNuevo.delete('edad');

mapaNuevo.forEach((valor,clave)=>{console.log("Clave: "+clave+" Valor: "+valor)})

function esPar(numero1){
try{
    if(typeof numero1 !=="number"){

            throw new Error (" El parametro no es un número"); //comprobamos que es numero
    } 
    if(numero1%2==0){
        console.log("El número "+numero1+" es par");
    } else{

        console.log("El número "+numero1+" es impar");
    }

}catch (error){
            console.error("Error:"+error.message);



}finally{

    console.log("Funcion completada")
}
}

esPar(2);

esPar("Hola");
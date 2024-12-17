function division(numero1,numero2){
try{
    let resultado;

if(numero2==0){
    throw new Error(" No se puede dividir por 0");
}

    resultado = numero1/numero2;
    console.log("El resultado de dividir " +numero1+" por "+numero2+" es: "+resultado);


} catch (error){
console.error("Error: "+error.message);

} finally{
    console.log("La operacion se ha completado")
}
}

division(8,2);

division(2,0);

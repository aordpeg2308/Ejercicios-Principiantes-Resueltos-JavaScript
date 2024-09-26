let numeroSecreto = 8;
numeroSecreto = parseInt(numeroSecreto);
let numeroIntroducido = prompt("Adivina el número secreto: ");
numeroIntroducido = parseInt(numeroIntroducido);

if ( numeroIntroducido === numeroSecreto){
    alert("Has acertado");
}else if (numeroIntroducido<numeroSecreto){

    alert("Lo siento el número es mayor al introducido");
} else{
    alert("Lo siento el número es inferior al introducido");
}

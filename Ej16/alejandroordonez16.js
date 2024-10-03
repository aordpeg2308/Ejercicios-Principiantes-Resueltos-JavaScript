function calcularMayor( numero1, numero2){
if(numero1>numero2){
    alert (numero1+" es mayor que "+numero2);
} else if (numero2>numero1){

    alert (numero2+" es mayor que "+numero1);
}else{
    alert (numero1+" es igual que "+numero2);
}
}

let numero1 = prompt("introduce el primer núemero: ");
numero1 = parseInt(numero1);
let numero2 = prompt("introduce el segundo núemero: ");
numero2 = parseInt(numero2);
calcularMayor(numero1,numero2);

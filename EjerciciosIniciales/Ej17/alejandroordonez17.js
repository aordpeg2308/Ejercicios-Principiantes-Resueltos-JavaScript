function facturacion (precio, metodoPago){
    let pagofinal;

   if (precio<200){

    pagofinal = precio;
   } else if (precio>400){

     pagofinal = precio *0.6;
   } else{
        switch (metodoPago){

            case "E": {pagofinal = precio*0.7;
            break;
        }
            case "D": { pagofinal = precio*0.8;
                break;
            }
            case "C":{
                pagofinal =precio *0.9;
                break
            }
    }
    

   }
   return pagofinal;
}


let precioProducto = prompt("Introduce el precio del producto")
precioProducto = parseFloat(precioProducto);



do {
    tipoPago = prompt("Introduce el tipo de pago: C. Tarjeta de crédito, E. Efectivo, D. Tarjeta de débito").toUpperCase();
   
    if (tipoPago !== "C" && tipoPago !== "E" && tipoPago !== "D") {
        alert("El tipo de pago no es correcto. Por favor, introduce C, E o D.");
    }
    
} while (tipoPago !== "C" && tipoPago !== "E" && tipoPago !== "D");

let pagofinal = facturacion(precioProducto,tipoPago);

alert("El precio final es de "+pagofinal);
let archivoJason = '[{"nombre": "Laptop", "precio": 1500,"stocks": 5}, {"nombre": "Teclado", "precio": 50,"stocks": 15}, {"nombre": "Monitor", "precio": 200,"stocks": 8}]';


let productos = JSON.parse(archivoJason);
productos.forEach(producto => {
    if(producto.precio>100){
    console.log(producto.nombre);
    
    }
});
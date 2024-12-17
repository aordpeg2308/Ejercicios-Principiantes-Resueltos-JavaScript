
const producto = {
    nombre: 'Laptop',
    precio: 1000,
    cantidad: 5
  };
  
 
  const copiaProducto = { ...producto }
  

  copiaProducto.cantidad = 10;
  
  
  console.log('Producto original:', producto);
  console.log('Copia del producto:', copiaProducto);
  
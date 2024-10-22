
//El primer paso es crear las dos clases que necesitamos;
class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarInfo() {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Precio: $${this.precio}, Stock: ${this.stock}`;
    }
}


class Tienda {
    constructor() {
        this.productos = new Map();
        this.clientes = new Set(); //Aunque podría haber hecho cliente como una clase Persona, preferí hacerlo así para ahorrme tiempo
        this.ventas = [];
    }

    agregarProducto(producto) {  //En esta función añado el producto al HashMap siendo el id su clave y el producto entero la clave
        this.productos.set(producto.id, producto);  
    }

    actualizarStock(idProducto, cantidad) {
        const producto = this.productos.get(idProducto);
        if (producto) {    //Compruebo que existe el producto con ese id para actualizarlo sino se manda un mensaje de que no está bien metido
            producto.stock = cantidad;
            console.log(`El stock del producto ${producto.nombre} ha sido actualizado a ${producto.stock}.`);
        } else {
            console.log('Producto no encontrado.');
        }
    }

    mostrarInventario() {           // En esta función se muestra por cada producto el inventario.
        console.log('Inventario de Productos:');
        this.productos.forEach(producto => {
            console.log(producto.mostrarInfo());
        });
    }

    registrarCliente(nombreCliente) {  //Compruebo que el cliente no existe y sino existe, lo añado al Set
        if (!this.clientes.has(nombreCliente)) {
            this.clientes.add(nombreCliente);
            console.log(`Cliente ${nombreCliente} registrado.`);
        } else {
            console.log(`Cliente ${nombreCliente} ya está registrado.`);
        }
    }

    realizarVenta(nombreCliente, idProducto, cantidad) { //No creo que haga falta explicar los paramentros pero son nombre del cliente, el id del producto y el número de productos que van a comprar
     
        if (!this.clientes.has(nombreCliente)) {   //Si no existe el cliente lo creo con la funcion de arriba
            this.registrarCliente(nombreCliente);
        }

    
        const producto = this.productos.get(idProducto); //Si el producto no existe nos avisa.
        if (!producto) {
            console.log('Producto no encontrado.');
            return;
        }

        if (producto.stock < cantidad) {
            console.log('Stock insuficiente.'); //Si el stock tampoco es suficiente avisa. 
            return;
        }

       
        const total = producto.precio * cantidad;
        producto.stock -= cantidad;

        const venta = {                       //En vez de crear la clase Venta, lo hago aquí mismo
            cliente: nombreCliente,
            idProducto: idProducto,
            cantidad: cantidad,
            total: total
        };

        this.ventas.push(venta);
        console.log(`Venta realizada: Cliente ${nombreCliente}, Producto ${producto.nombre}, Cantidad ${cantidad}, Total $${total}`);
    }

    mostrarVentas() {
        console.log('Ventas realizadas:');
        this.ventas.forEach(venta => {
            console.log(`Cliente: ${venta.cliente}, ID Producto: ${venta.idProducto}, Cantidad: ${venta.cantidad}, Total: $${venta.total}`);
        });
    }

    productosSinStock() {
        return [...this.productos.values()].filter(producto => producto.stock === 0);
    }

    ventasPorCliente(nombreCliente) {
        const ventasCliente = this.ventas.filter(venta => venta.cliente === nombreCliente);
        if (ventasCliente.length === 0) {
            console.log(`No se encontraron ventas para el cliente ${nombreCliente}.`);
        } else {
            console.log(`Ventas realizadas por ${nombreCliente}:`);
            ventasCliente.forEach(venta => {
                console.log(`ID Producto: ${venta.idProducto}, Cantidad: ${venta.cantidad}, Total: $${venta.total}`);
            });
        }
    }

    totalIngresos() {
        return this.ventas.reduce((total, venta) => total + venta.total, 0); //Asi consigo la suma de todas las ventas
    }
}


const tienda = new Tienda();


const producto1 = new Producto(1, 'Ordenador Gaming MSI', 1000, 10);
const producto2 = new Producto(2, 'Raton logitech', 25, 50);
const producto3 = new Producto(3, 'Teclado Mecanico Razer', 45, 30);
const producto4 = new Producto(4, 'Monitor LG  40 pulgafas', 350, 1);
const producto5 = new Producto(5, 'Auriculares con micrófono Hyper X', 80, 15);


tienda.agregarProducto(producto1);
tienda.agregarProducto(producto2);
tienda.agregarProducto(producto3);
tienda.agregarProducto(producto4);
tienda.agregarProducto(producto5);

tienda.mostrarInventario();


tienda.registrarCliente('Alejandro');
tienda.registrarCliente('Jesús');

tienda.realizarVenta('Alejandro', 1, 1);
tienda.realizarVenta('Jesús', 4,1 ); 
tienda.realizarVenta('Jesús', 3, 1);  


tienda.mostrarInventario();


tienda.mostrarVentas();


const sinStock = tienda.productosSinStock();
console.log('Productos sin stock:');
sinStock.forEach(producto => console.log(producto.mostrarInfo()));


tienda.ventasPorCliente('Jesús');


console.log(`Total de ingresos: $${tienda.totalIngresos()}`);


const rectangulo = {
    ancho: 10,
    alto: 5,
    calcularArea() {
      return this.ancho * this.alto;
    }
  };
  
  console.log("Área del rectángulo: "+ rectangulo.calcularArea());
  
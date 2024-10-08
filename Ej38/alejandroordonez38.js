class Animal {
    hablar() {
      console.log('El animal hace un sonido');
    }
  }
  
  class Perro extends Animal {
    hablar() {
      console.log('Guau');
    }
  }
  
  const perro = new Perro();
  perro.hablar();
  


//Primero creamos la funcion  generadora de fibonacci, que eso es basicamente: comienza en 0 y en 1, y vas sumando, al anterior: 0+1 =1 1+1=2;2+1=3 etc
function* fibonacci() {
    let a = 0, b = 1; 
    while (true) {    
        yield a;      
        
        let temp = a;  
        a = b;          
        b = temp + b;  
    }
}
  
  const gen = fibonacci();
  console.log(gen.next().value); 
  console.log(gen.next().value);
  console.log(gen.next().value); 
  console.log(gen.next().value);
  console.log(gen.next().value); 
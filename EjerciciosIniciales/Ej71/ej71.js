class Banco {
    #balance = 0; 

    depositar(cantidad) {
        if (cantidad > 0) {
            this.#balance += cantidad;
            console.log(`Depositados $${cantidad}. Nuevo balance: $${this.#balance}.`);
        }
    }

    retirar(cantidad) {
        if (cantidad <= this.#balance) {
            this.#balance -= cantidad;
            console.log(`Retirados $${cantidad}. Nuevo balance: $${this.#balance}.`);
        } else {
            console.log('Fondos insuficientes.');
        }
    }

    obtenerBalance() {
        return this.#balance;
    }
}

const cuenta = new Banco();
cuenta.depositar(500);
cuenta.retirar(200);
cuenta.retirar(400);
console.log(`Balance final: $${cuenta.obtenerBalance()}`);

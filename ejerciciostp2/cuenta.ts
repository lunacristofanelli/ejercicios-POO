class Persona {
    private nombre: string;
    private apellido: string;

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }
}

class Cuenta {
    private titular: Persona;
    private saldo: number;

    constructor(titular: Persona, saldo?: number) {
        this.titular = titular;
        this.saldo = saldo || 0;
    }

    getTitular(): Persona {
        return this.titular;
    }

    getSaldo(): number {
        return this.saldo;
    }

    setTitular(titular: Persona): void {
        this.titular = titular;
    }

    mostrar(): void {
        console.log("Datos de la cuenta:");
        console.log(`Titular: ${this.titular.getNombreCompleto()}`);
        console.log(`Saldo: $${this.saldo.toFixed(2)}`);
    }

    ingresar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Se ingresaron $ ${monto.toFixed(2)} a la cuenta.`);
        } else {
        }
    }

    retirar(monto: number): void {
        this.saldo -= monto;
        console.log(`Se retiraron $ ${monto.toFixed(2)} de la cuenta.`);
}

}

let persona1 = new Persona("Luna", "Cristofanelli");
let cuenta1 = new Cuenta(persona1, 5000);

cuenta1.ingresar(2000);
cuenta1.retirar(1500);
cuenta1.mostrar();

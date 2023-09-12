var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Persona.prototype.getNombreCompleto = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    return Persona;
}());
var Cuenta = /** @class */ (function () {
    function Cuenta(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo || 0;
    }
    Cuenta.prototype.getTitular = function () {
        return this.titular;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    Cuenta.prototype.mostrar = function () {
        console.log("Datos de la cuenta:");
        console.log("Titular: ".concat(this.titular.getNombreCompleto()));
        console.log("Saldo: $".concat(this.saldo.toFixed(2)));
    };
    Cuenta.prototype.ingresar = function (monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log("Se ingresaron $ ".concat(monto.toFixed(2), " a la cuenta."));
        }
        else {
        }
    };
    Cuenta.prototype.retirar = function (monto) {
        this.saldo -= monto;
        console.log("Se retiraron $ ".concat(monto.toFixed(2), " de la cuenta."));
    };
    return Cuenta;
}());
var persona1 = new Persona("Luna", "Cristofanelli");
var cuenta1 = new Cuenta(persona1, 5000);
cuenta1.ingresar(2000);
cuenta1.retirar(1500);
cuenta1.mostrar();

var Cafetera = /** @class */ (function () {
    function Cafetera(capacidadMaximaCafe, cantidadActualCafe) {
        if (capacidadMaximaCafe === void 0) { capacidadMaximaCafe = 1000; }
        if (cantidadActualCafe === void 0) { cantidadActualCafe = 0; }
        this.capacidadMaximaCafe = capacidadMaximaCafe;
        this.cantidadActualCafe = capacidadMaximaCafe;
        if (cantidadActualCafe > capacidadMaximaCafe)
            cantidadActualCafe = capacidadMaximaCafe;
    }
    Cafetera.prototype.llenarCafetera = function () {
        this.cantidadActualCafe = this.capacidadMaximaCafe;
        return ("Su cafetera está llena");
    };
    Cafetera.prototype.servirTaza = function (cantidad) {
        if (cantidad <= this.cantidadActualCafe) {
            this.cantidadActualCafe -= cantidad;
            console.log("Se sirvi\u00F3 una taza de ".concat(cantidad, " c.c. de caf\u00E9."));
        }
        else {
            console.log("No hay suficiente café para llenar la taza.");
        }
    };
    Cafetera.prototype.vaciarCafetera = function () {
        this.cantidadActualCafe = 0;
        return ("Su cafetera está vacía");
    };
    Cafetera.prototype.agregarCafe = function (cantidad) {
        if (cantidad > 0) {
            this.cantidadActualCafe += cantidad;
            console.log("Se agreg\u00F3 ".concat(cantidad, " c.c. de caf\u00E9 a la cafetera"));
        }
        else
            ("Su cafetera está llena");
    };
    return Cafetera;
}());
var miCafetera = new Cafetera();
miCafetera.vaciarCafetera();
miCafetera.agregarCafe(600);
miCafetera.servirTaza(200);
miCafetera.servirTaza(400);
console.log(miCafetera);

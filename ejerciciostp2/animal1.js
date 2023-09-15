"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nombre, edad, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    Animal.prototype.hacer_sonido = function () {
        return "";
    };
    Animal.prototype.moverse = function () {
    };
    Animal.prototype.mostrarInfo = function () {
        return (this.nombre, this.raza);
    };
    return Animal;
}());
exports.Animal = Animal;
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, edad, raza, tamaño) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.raza = raza;
        _this.tamaño = tamaño;
        return _this;
    }
    Perro.prototype.buscarObjeto = function () {
        return "encontró el juguete";
    };
    Perro.prototype.hacer_sonido = function () {
        return "ladrar";
    };
    Perro.prototype.moverse = function () {
    };
    Perro.prototype.mostrarInfo = function () {
        return (this.nombre, this.raza);
    };
    return Perro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, edad, raza, pelaje) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.raza = raza;
        _this.pelaje = pelaje;
        return _this;
    }
    Gato.prototype.jugar_con_juguete = function () {
        return "su michino esta jugando";
    };
    Gato.prototype.hacer_sonido = function () {
        return "maullar";
    };
    Gato.prototype.moverse = function () {
    };
    Gato.prototype.mostrarInfo = function () {
        return (this.nombre, this.raza);
    };
    return Gato;
}(Animal));
var Pajaro = /** @class */ (function (_super) {
    __extends(Pajaro, _super);
    function Pajaro(nombre, edad, raza, tipo_de_pico) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.raza = raza;
        _this.tipo_de_pico = tipo_de_pico;
        return _this;
    }
    Pajaro.prototype.volar = function () {
        return "su pajaro está volando";
    };
    Pajaro.prototype.hacer_sonido = function () {
        return "silban, cantan y chillan";
    };
    Pajaro.prototype.moverse = function () {
    };
    Pajaro.prototype.mostrarInfo = function () {
        return (this.nombre, this.raza);
    };
    return Pajaro;
}(Animal));
var perro1 = new Perro("Bonito", 13, "Mestizo", "Mediano");
var gato1 = new Gato("La Micha", 2, "Negra como una pantera", "Negro,corto y brilloso");
var pajaro1 = new Pajaro("Negrito", 5, "Charrua", "Curvado y negro");
console.log(perro1, gato1, pajaro1);

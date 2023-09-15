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
exports.Empleado = void 0;
var Empleado = /** @class */ (function () {
    function Empleado(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado) {
        this.nombre = nombreEmpleado;
        this.apellido = apellidoEmpleado;
        this.salarioMensual = salarioMensualEmpleado;
    }
    Empleado.prototype.aumentarSalario = function (aumento) {
        this.salarioMensual += aumento;
        return this.salarioMensual;
    };
    Empleado.prototype.reducirSalario = function (reduccion) {
        this.salarioMensual -= reduccion;
        return this.salarioMensual;
    };
    return Empleado;
}());
exports.Empleado = Empleado;
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, areaGerente) {
        var _this = _super.call(this, nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado) || this;
        _this.area = areaGerente;
        return _this;
    }
    Gerente.prototype.asignarTareas = function (tareas) {
        console.log("Tareas asignadas a ".concat(this.nombre, " en el \u00E1rea ").concat(this.area, ": ").concat(tareas.join(', ')));
    };
    return Gerente;
}(Empleado));
var Trabajador = /** @class */ (function (_super) {
    __extends(Trabajador, _super);
    function Trabajador(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, horas) {
        var _this = _super.call(this, nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado) || this;
        _this.horasTrabajadas = horas;
        return _this;
    }
    Trabajador.prototype.solicitarDiaLibre = function () {
        console.log("".concat(this.nombre, ",").concat(this.apellido, ", solicit\u00F3 dia libre"));
    };
    return Trabajador;
}(Empleado));
var EmpleadoTemportal = /** @class */ (function (_super) {
    __extends(EmpleadoTemportal, _super);
    function EmpleadoTemportal(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, horas, fechaFinContratio) {
        return _super.call(this, nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, horas) || this;
    }
    EmpleadoTemportal.prototype.verificarVencimientoContrato = function () {
        var fechaActual = new Date();
        /* Comparar la fecha de vencimiento del contrato con la fecha actual */
        if (this.fechaFinContrato > fechaActual) {
            return false;
        }
        else {
            return true;
            /* El contrato ha vencido o está a punto de vencer */
        }
    };
    return EmpleadoTemportal;
}(Trabajador));
var empleado1 = new Empleado("Juan", "Andreu", 200000);
var trabajador1 = new Trabajador("Luna", "Cristofanelli", 150000, 8);
var empleadoTemporal1 = new EmpleadoTemportal("Pablo", "Perez", 50000, 4, new Date(2 / 3 / 2023));
console.log(empleado1, trabajador1, empleadoTemporal1);
console.log(empleadoTemporal1.verificarVencimientoContrato());

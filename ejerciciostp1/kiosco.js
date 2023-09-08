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
var Item = /** @class */ (function () {
    function Item(nombreArticulo, alCosto) {
        this.TipoDeProducto = nombreArticulo;
        this.PrecioCosto = alCosto;
    }
    Item.prototype.getTipoDeProducto = function () {
        return this.TipoDeProducto;
    };
    Item.prototype.getPrecioCosto = function () {
        return this.PrecioCosto;
    };
    return Item;
}());
var Stock = /** @class */ (function (_super) {
    __extends(Stock, _super);
    function Stock(nombreArticulo, alCosto) {
        var _this = _super.call(this, nombreArticulo, alCosto) || this;
        _this.itemsDisponibles = [];
        _this.itemsVendidos = [];
        return _this;
    }
    Stock.prototype.cargarItems = function (items) {
        var _a;
        (_a = this.itemsDisponibles).push.apply(_a, items);
    };
    Stock.prototype.venderItem = function (nombreArticulo) {
        var index = -1;
        for (var i = 0; i < this.itemsDisponibles.length; i++) {
            if (this.itemsDisponibles[i].getTipoDeProducto() === nombreArticulo) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            var vendido = this.itemsDisponibles.splice(index, 1)[0];
            this.itemsVendidos.push(vendido);
            console.log("Se ha vendido ".concat(vendido.getTipoDeProducto(), " por $").concat(vendido.getPrecioCosto()));
        }
        else {
            console.log("El art\u00EDculo ".concat(nombreArticulo, " no est\u00E1 disponible para la venta"));
        }
    };
    return Stock;
}(Item));
var stockKiosco = new Stock("Yerba Playadito", 800);
stockKiosco.cargarItems([new Item("Alfajor Fantoche", 150), new Item("Gaseosa Coca Cola", 310), new Item("Chicles Bobaloo", 105)]);
stockKiosco.venderItem("Alfajor Fantoche");
stockKiosco.venderItem("Gaseosa Coca Cola");
stockKiosco.venderItem("Yerba Playadito");

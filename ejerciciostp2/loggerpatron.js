var Logger = /** @class */ (function () {
    function Logger() {
        this.log = [];
    }
    Logger.getInstance = function () {
        if (Logger.instance === null) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.accederSistema = function (usuario) {
        var acceso = "".concat(usuario, " accedi\u00F3 al sistema en ").concat(new Date().toLocaleString());
        this.log.push(acceso);
    };
    Logger.prototype.mostrarLog = function () {
        console.log("Registro de accesos:");
        this.log.forEach(function (acceso, index) {
            console.log("".concat(index + 1, ": ").concat(acceso));
        });
    };
    Logger.instance = null;
    return Logger;
}());
var logger = Logger.getInstance();
logger.accederSistema("Usuario1");
logger.accederSistema("Usuario2");
logger.accederSistema("Usuario3");
logger.mostrarLog();

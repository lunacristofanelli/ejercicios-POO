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
var Usuario = /** @class */ (function () {
    function Usuario(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
    Usuario.prototype.publicarPost = function (post) {
        console.log("[".concat(this.nombre, "] ha publicado un post: ").concat(post));
    };
    Usuario.prototype.comentarPost = function (post, comentario) {
        console.log("[".concat(this.nombre, "] coment\u00F3 en el posteo \"").concat(post, "\": ").concat(comentario));
    };
    return Usuario;
}());
var Influencer = /** @class */ (function (_super) {
    __extends(Influencer, _super);
    function Influencer(nombre, email, contraseña, seguidores, tipoDeContenido, seguidos) {
        var _this = _super.call(this, nombre, email, contraseña) || this;
        _this.contenido = tipoDeContenido;
        _this.seguidores = seguidores;
        _this.seguidos = seguidos;
        return _this;
    }
    Influencer.prototype.realizarColaboracion = function (otroInfluencer) {
        console.log("".concat(this.nombre, " realiz\u00F3 una colaboraci\u00F3n con ").concat(otroInfluencer.nombre));
    };
    return Influencer;
}(Usuario));
var Seguidor = /** @class */ (function (_super) {
    __extends(Seguidor, _super);
    function Seguidor(nombre, email, contraseña, intereses) {
        var _this = _super.call(this, nombre, email, contraseña) || this;
        _this.intereses = intereses;
        _this.intereses = intereses;
        return _this;
    }
    Seguidor.prototype.buscarContenidoRelacionado = function () {
        console.log("".concat(this.nombre, " est\u00E1 buscando contenido relacionado a: ").concat(this.intereses.join(', ')));
    };
    return Seguidor;
}(Usuario));
var usuario1 = new Influencer("Maria Becerra", "mariabecerra@gmail.com", "maria1234", 20000000000, "Artistico, musical", 900);
var usuario2 = new Seguidor("Luna Cristofanelli", "lunacristofanelli@gmail.com", "luna1234", ["música", "artistas"]);
console.log(usuario1, usuario2);
usuario1.publicarPost("Nuevo posteo, denle like");
usuario1.realizarColaboracion(new Influencer("Emilia Mernes", "emiliamernes@gmail.com", "emilia1234", 50000000, "Modelo", 1200));

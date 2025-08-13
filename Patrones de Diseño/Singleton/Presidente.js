"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presidente = void 0;
var Presidente = /** @class */ (function () {
    //El constructor es privado para que nunca nadie pueda hacer new President()
    function Presidente(nombre) {
        this.nombre = nombre;
    }
    //metodo para obtener al unico presidente
    Presidente.obtenerPresidente = function (nombre) {
        if (!Presidente.unicoPresidente) {
            Presidente.unicoPresidente = new Presidente(nombre);
        }
        return Presidente.unicoPresidente;
    };
    Presidente.prototype.hablar = function () {
        return "Hola soy el presidente ".concat(this.nombre);
    };
    return Presidente;
}());
exports.Presidente = Presidente;

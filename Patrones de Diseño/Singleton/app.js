"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Presidente_1 = require("./Presidente");
var presidente1 = Presidente_1.Presidente.obtenerPresidente("Darío");
var presidente2 = Presidente_1.Presidente.obtenerPresidente("Pedro");
console.log(presidente1.hablar());
console.log(presidente2.hablar());
console.log(presidente1 === presidente2);

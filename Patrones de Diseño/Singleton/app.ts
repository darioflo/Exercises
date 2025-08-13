import { Presidente } from "./Presidente";

//Es imposible crear dos presidentes
const presidente1: Presidente = Presidente.obtenerPresidente("Darío");
const presidente2: Presidente = Presidente.obtenerPresidente("Pedro");

console.log(presidente1.hablar());
console.log(presidente2.hablar());
console.log(presidente1 === presidente2);

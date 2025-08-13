export class Presidente {
  private static unicoPresidente: Presidente;
  public nombre: string;

  //El constructor es privado para que nunca nadie pueda hacer new President()
  private constructor(nombre: string) {
    this.nombre = nombre;
  }

  //metodo para obtener al unico presidente
  static obtenerPresidente(nombre: string): Presidente {
    if (!Presidente.unicoPresidente) {
      Presidente.unicoPresidente = new Presidente(nombre);
    }
    return Presidente.unicoPresidente;
  }

  hablar() {
    return `Hola soy el presidente ${this.nombre}`;
  }
}

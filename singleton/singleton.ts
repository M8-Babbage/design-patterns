/**
 * Patrón de diseño Singleton - Creacional
 */
class Singleton {
  /**
   * Propiedades estáticas que almacenan la instancia de la clase Singleton
   */
  private static instance: Singleton;

  /**
   * Propiedad que almacena el número aleatorio para validar la instancia
   */
  private random: number;

  /**
   * Constructor privado para evitar la creación de instancias de la clase Singleton
   */
  private constructor() {
    this.random = Math.random();
  }

  /**
   * Método que devuelve la instancia de la clase Singleton
   * Este método sería el "constructor" de la clase Singleton
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  /**
   * Método para obtener el número aleatorio
   */
  public getRandom(): number {
    return this.random;
  }
}

/*
 * Uso del patrón Singleton
 */
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log("Número aleatorio en singleton1:", singleton1.getRandom());
console.log("Número aleatorio en singleton2:", singleton2.getRandom());

if (singleton1 === singleton2) {
  console.log("Las instancias son iguales");
} else {
  console.log("Las instancias son diferentes");
}

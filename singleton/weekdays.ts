type Language = 'es' | 'en';

class WeekDays {
  private static instance: WeekDays;
  private language: Language;

  private daysEs: string[] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  private daysEn: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  /**
   * Constructor privado para evitar la creación de nuevas instancias.
   */
  private constructor(language: Language) {
    this.language = language;
  }

  /**
   * Método estático para obtener la instancia única de la clase.
   * Solo la primera vez se puede establecer el idioma.
   */
  public static getInstance(language: Language = "en"): WeekDays {
    if (!WeekDays.instance) {
      WeekDays.instance = new WeekDays(language);
    }
    return WeekDays.instance;
  }

  /**
   * Obtiene los días de la semana en el idioma configurado.
   */
  public getDays(): string[] {
    return this.language === "en" ? this.daysEn : this.daysEs;
  }
}

// Uso del patrón Singleton
const weekDays1 = WeekDays.getInstance("es");
console.log("Días en español:", weekDays1.getDays()); // ["Lunes", "Martes", ...]

const weekDays2 = WeekDays.getInstance("en");
console.log("Días en inglés:", weekDays2.getDays()); // ["Lunes", "Martes", ...] porque es la misma instancia

// Verificación de que solo existe una instancia
if (weekDays1 === weekDays2) {
  console.log("Las instancias son iguales");
} else {
  console.log("Las instancias son diferentes");
}

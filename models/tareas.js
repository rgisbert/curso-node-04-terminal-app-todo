import colors from 'colors';

import Tarea from './tarea.js';

/**
 * Clase para manejar todo lo relativo al listado de Tareas
 */
class Tareas {
  #listado = {};

  constructor() {
    this.#listado = {};
  }

  /**
   * Devuelve todas las tareas para la impresión
   */
  get listadoArr() {
    const listado = [];

    Object.keys(this.#listado).forEach((k) => listado.push(this.#listado[k]));

    return listado;
  }

  /**
   * Recarag el listado de tareas con las recuperadas y crea la estructura
   * @param {tarea[]} tareas Tareas a cargar en la instancia
   */
  cargarTareasFromArray(tareas = []) {
    tareas.forEach((t) => {
      this.#listado[t.id] = t;
    });
  }

  /**
   * Crea la tarea y la añade al objeto de Tareas completas
   * @param {string} desc Descripción de la tareas a crear
   */
  crearTarea(desc = '') {
    const tarea = new Tarea(desc);

    this.#listado[tarea.id] = tarea;
  }

  /**
   * Imprime un listado bonito para el usuario
   */
  listadoCompleto() {
    /**
     * Según la condición evaluada, devuelve un texto para mostrar al usuario
     * @param {null | string} valor En caso de que sea null, está por realizar
     * @returns texto "Completado" (en verde) o "Pendiente" (en rojo)
     */
    const completado = (valor) =>
      valor ? 'Completado'.green : 'Pendiente'.red;

    // ? Si imprimo con '\n' deja dos espacios
    console.log();

    Object.entries(this.#listado).forEach(([, {desc, completadoEn}], index) => {
      const i = `${index + 1}`.green;

      console.log(`${i}. ${desc} (${completado(completadoEn)}).`);
    });
  }
}

export default Tareas;

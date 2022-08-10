import Tarea from './tarea.js';

class Tareas {
  #listado = {};

  constructor() {
    this.#listado = {};
  }

  /**
   * Devuelve el objeto sin modificaciones para guardarlo en archivo
   */
  get listadoCompleto() {
    return this.#listado;
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
   * Crea la tarea y la añade al objeto de Tareas completas
   * @param {string} desc Descripción de la tareas a crear
   */
  crearTarea(desc = '') {
    const tarea = new Tarea(desc);

    this.#listado[tarea.id] = tarea;
  }
}

export default Tareas;

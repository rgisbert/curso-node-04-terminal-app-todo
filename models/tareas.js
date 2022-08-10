import Tarea from './tarea.js';
import {leerDB} from '../helpers/guardarArchivo.js';

/**
 * Clase para manejar todo lo relativo al listado de Tareas
 */
class Tareas {
  #listado = {};

  constructor() {
    this.#listado = {};
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

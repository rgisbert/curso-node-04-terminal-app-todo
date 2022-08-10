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
   * Eliminar una tarea del listado
   * @param {string} id Identificador del objeto a borrar
   */
  borrarTarea(id) {
    if (this.#listado[id]) delete this.#listado[id];
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
    // ? Si imprimo con '\n' deja dos espacios
    console.log();

    Object.entries(this.#listado).forEach(([, {desc, completadoEn}], index) => {
      this.#imprimirTarea({
        num: index + 1,
        tarea: desc,
        finalizada: completadoEn,
      });
    });
  }

  listarCompletadasPendientes(completadas = true) {
    let i = 0;

    console.log();

    this.listadoArr.forEach(({desc, completadoEn}) => {
      if (completadas === !!completadoEn) {
        i++;

        this.#imprimirTarea({
          num: i,
          tarea: desc,
          finalizada: completadoEn,
        });
      }
    });
  }

  /**
   * Impresión de la tarea en pantalla
   * @property {object} param0  - Objeto con opciones a imprimir
   * @property {number} param0.num    - Número de lista ordenada
   * @property {string} param0.tarea  - Descripción de la tarea
   * @property {null | string} param0.finalizada  - Recibe el parámetro de la tarea, si es null, sigue pendiente
   */
  #imprimirTarea({num = 0, tarea = '', finalizada = false}) {
    const index = `${num}`.green;
    const completado = finalizada ? `${finalizada}`.green : 'Pendiente'.red;

    console.log(`${index}. ${tarea} (${completado}).`);
  }
}

export default Tareas;

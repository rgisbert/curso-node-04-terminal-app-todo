import Tareas from './models/tareas.js';
import {guardarDB, leerDB} from './helpers/guardarArchivo.js';
import {
  confirmar,
  inquirerMenu,
  leerInput,
  listadoTareasBorrar,
  mostrarListadoChecklist,
  pausa,
} from './helpers/inquirer.js';

console.clear();

const main = async () => {
  const tareas = new Tareas();
  const tareasDB = leerDB();
  let opt = '';

  // Si se recuperan tareas del archivo, se cargan en la instancia
  if (tareasDB) tareas.cargarTareasFromArray(tareasDB);

  do {
    opt = await inquirerMenu();

    // Opciones del menú
    switch (opt) {
      case '1': // Crear tarea
        const desc = await leerInput('Tarea:');

        tareas.crearTarea(desc);
        break;

      case '2': // Listar tareas
        tareas.listadoCompleto();
        break;

      case '3': // Listar tareas completadas
        tareas.listarCompletadasPendientes();
        break;

      case '4': // Listar tareas pendientes
        tareas.listarCompletadasPendientes(false);
        break;

      case '5': // Completar tarea(s)
        const arrIds = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompleted(arrIds);
        break;

      case '6': // Borrar tarea
        const id = await listadoTareasBorrar(tareas.listadoArr);

        // Si elige la opción de Borrar no hace nada
        if (id !== '0') {
          const okBorrar = await confirmar(
            `¿Está seguro de borrar este elemento?`.red
          );

          if (okBorrar) {
            tareas.borrarTarea(id);
            console.log(`Tarea eliminada.`.green);
          }
        }

        break;
    }

    guardarDB(tareas.listadoArr);

    if (opt !== '0') await pausa();
  } while (opt !== '0');
};

main();

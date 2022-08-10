import Tareas from './models/tareas.js';
import {guardarDB, leerDB} from './helpers/guardarArchivo.js';
import {inquirerMenu, leerInput, pausa} from './helpers/inquirer.js';

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
        break;

      case '4': // Listar tareas pendientes
        break;

      case '5': // Completar tarea(s)
        break;

      case '6': // Borrar tarea
        break;
    }

    guardarDB(tareas.listadoArr);

    if (opt !== '0') await pausa();
  } while (opt !== '0');
};

main();

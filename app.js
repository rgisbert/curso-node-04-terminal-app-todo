import Tareas from './models/tareas.js';
import {inquirerMenu, leerInput, pausa} from './helpers/inquirer.js';

console.clear();

const main = async () => {
  const tareas = new Tareas();
  let opt = '';

  do {
    opt = await inquirerMenu();

    // Opciones del menú
    switch (opt) {
      case '1': // Crear tarea
        const desc = await leerInput('Tarea:');

        tareas.crearTarea(desc);
        break;

      case '2': // Listar tareas
        // console.log(tareas.listarTareas());
        const res = tareas.listadoArr;
        console.log(res);
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

    if (opt !== '0') await pausa();
  } while (opt !== '0');
};

main();

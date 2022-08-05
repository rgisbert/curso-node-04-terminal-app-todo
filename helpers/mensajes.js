require('colors');

const showMenu = () => {
  const title = '*  Seleccione una opción  *';

  console.clear();

  console.log('*'.repeat(title.length).green);
  console.log(title.green);
  console.log('*'.repeat(title.length).green + '\n');

  console.log(`${'1.'.green} Crear tarea.`);
  console.log(`${'2.'.green} Listar tareas.`);
  console.log(`${'3.'.green} Listar tareas completadas.`);
  console.log(`${'4.'.green} Listar tareas pendientes.`);
  console.log(`${'5.'.green} Completar tarea(s)`);
  console.log(`${'6.'.green} Borrar tarea`);
  console.log(`${'0.'.green} Salir.\n`);

  // Recoge input usuario
  const readLine = require('readline').createInterface({
    // Pausar ejecución hasta recibir datos
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question(`Seleccione una opción: `, (answer) => {
    console.log(answer);
    readLine.close(); // Para no seguir esperando información
  });
};

const pausa = () => {
  const readLine = require('readline').createInterface({
    // Pausar ejecución hasta recibir datos
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question(
    `\nPresione ${'ENTER'.green} para continuar.\n`,
    (answer) => {
      readLine.close();
    }
  );
};

module.exports = {
  showMenu,
  pausa,
};

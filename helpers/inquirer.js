import colors from 'colors';
import inquirer from 'inquirer';

const questions = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear tarea.`,
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas.`,
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas completadas.`,
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes.`,
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`,
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tarea`,
      },
      {
        value: '0',
        name: `${'0.'.green} Salir.\n`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();

  const title = '*  Seleccione una opción  *';

  console.log('*'.repeat(title.length).green);
  console.log(title.green);
  console.log('*'.repeat(title.length).green + '\n');

  const {opcion} = await inquirer.prompt(questions);

  return opcion;
};

const pausa = () => {
  // Si lo pongo dentro de inquirer imprime un ? en la línea vacía
  console.log('\n');

  return inquirer.prompt([
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar.`,
    },
  ]);
};

export {inquirerMenu, pausa};

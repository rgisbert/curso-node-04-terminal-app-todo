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

/**
 * Muestra las opciones de menú a realizar por el programa
 * @returns {string} opciones del programa
 */
const inquirerMenu = async () => {
  console.clear();

  console.log('*************************'.green);
  console.log(`${'*'.green} ${'Seleccione una opción'.white} ${'*'.green}`);
  console.log('*************************\n'.green);

  const {opcion} = await inquirer.prompt(questions);

  return opcion;
};

/**
 * Pausa antes de continuar con la ejecución
 */
const pausa = () => {
  console.log();

  return inquirer.prompt([
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar.`,
    },
  ]);
};

/**
 * Función en la que, mandado un mensaje personalizado, se recoja lo escrito en pantalla por el usuario
 * @param {string} message Mensaje en pantalla para pedir un valor personalizado
 * @returns El input de respuesta introducido por el usuario
 */
const leerInput = async (message = 'Introduzca un valor:') => {
  console.log(`\n`);

  const question = [
    {
      type: 'input',
      name: 'descripcionTarea',
      message,
      validate(value) {
        if (value.length === 0) return `Por favor, introduzca un valor.`;

        return true;
      },
    },
  ];

  const {descripcionTarea} = await inquirer.prompt(question);

  return descripcionTarea;
};

export {inquirerMenu, leerInput, pausa};

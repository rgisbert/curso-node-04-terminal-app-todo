import fs from 'fs';

const archivo = './db/data.json';

/**
 * Guarda toda la información en el archivo
 * @param {object} data Información completa a grabar
 */
const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};

/**
 * Recupera la información con todas las tareas
 * @returns La información recuperada del archivo
 */
const leerDB = () => {
  if (!fs.existsSync(archivo)) return null;

  const info = fs.readFileSync(archivo, {encoding: 'utf-8'});

  return JSON.parse(info);
};

export {guardarDB, leerDB};

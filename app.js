require('colors');

const {pausa, showMenu} = require('./helpers/mensajes');

console.clear();

const main = async () => {
  let opt = '';

  do {
    opt = await showMenu();

    if (opt !== '0') {
      await pausa();
    }
  } while (opt !== '0');
};

main();

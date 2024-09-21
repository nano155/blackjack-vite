import _ from "underscore";

/**
 * Crear un nuevo deck de cartas mezclado.
 *
 * @param {string[]} tiposDeCarta ['A','J','Q','K']
 * @param {string[]} tiposEspeciales ['C','D','H','S'];
 * @returns {string[]}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("TiposDeCarta es obligatorio como un arreglo de string!");
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("TiposEspeciales es obligatorio como un arreglo de string!");
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

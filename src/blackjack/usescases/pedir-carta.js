
/**
 * Esta funcion permite pedir cartas del deck
 * @param {Array<String>} deck Esta funcion recibe un array con las cartas del deck
 * @returns {string} Esta funcion retorna la carta como string
 */

export const pedirCarta = (deck) => {
    if(!deck || deck.length === 0) throw Error('No hay cartas')

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
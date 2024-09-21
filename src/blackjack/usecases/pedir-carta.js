/**
 * 
 * @param {string[]} deck El deck de cartas existente!
 * @returns {string} Retorna la carta elegida por el jugador.
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
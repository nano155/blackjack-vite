

/**
 * Esta funcion calcula el valor de una carta
 * @param {string} carta Esta funcion recibe un valor tipo string
 * @returns {Number} Esta funcion retorna el numero de valor de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
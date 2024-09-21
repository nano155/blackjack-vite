/**
 * 
 * @param {string} carta Recibe una carta como string
 * @returns {number} retorna el valor de la carta recibida
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
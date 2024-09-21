/**
 * 
 * @param {string} carta 
 * @param {HTMLElement} divCartas 
 */

export const crearCarta = (carta, divCartas) =>{
    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        
        divCartas.append( imgCarta );
}
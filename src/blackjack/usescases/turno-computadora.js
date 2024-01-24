import {pedirCarta, valorCarta, crearCartaHTML} from './index'

// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML elemento html para mostrar puntos
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck =[] ) => {

    if(!puntosMinimos) throw Error('Puntos minimos son necesarios')
    if(!puntosHTML) throw Error('Argumento HTML es necesario')
    

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const cartaHTML = crearCartaHTML(carta)
        divCartasComputadora.append( cartaHTML );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 1000 );
}
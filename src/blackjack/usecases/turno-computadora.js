// turno de la computadora

import { crearCarta, pedirCarta, valorCarta } from "./";

/**
 *
 * @param {number} puntosMinimos
 * @param {HTMLElement } puntosHTML
 * @param {HTMLElement } divCartasComputadora
 * @param {string []} deck
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
  if (!puntosMinimos) throw new Error("Puntos minimos son necesarios!");
  if (!puntosHTML) throw new Error("PuntosHtml son necesarios!");

  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    
    puntosHTML.innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    crearCarta(carta, divCartasComputadora)

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora <= puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 500);

  return puntosComputadora
};

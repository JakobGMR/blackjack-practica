import {pedirCarta} from './';
import {acumularPuntos} from './';
import { crearCarta } from './';
import { determinarGanador } from './';

/**
 * 
 * @param {number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {Array<number>} puntosJugadores Array con los puntos de cada jugador
 * @param {HTMLElement} smalls Elemento HTML para mostrar los puntos
 * @param {Array<string>} deck Array de strings de los nombres de las cartas
 */
export const turnoComputadora = (puntosMinimos, puntosJugadores, smalls, deck = []) => {
    if(!puntosMinimos) throw new Error('puntosMinimos son necesarios');
    if(!smalls) throw new Error('smalls es necesario');

    let puntosComputadora = 0;

    do {
      const carta = pedirCarta(deck);

      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, smalls); // OPTIMIZACIÓN

      crearCarta(carta, puntosJugadores.length - 1);  // OPTIMIZACIÓN
        
    } while ((puntosComputadora <= puntosMinimos) && puntosMinimos <= 21);

    determinarGanador(puntosJugadores); // OPTIMIZACIÓN
};
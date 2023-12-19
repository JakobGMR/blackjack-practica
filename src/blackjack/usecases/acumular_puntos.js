import {valorCarta} from './valor_carta';

/**
 * 
 * @param {string} carta String con el nombre de la carta
 * @param {number} turno Número del jugador (el último siempre es la computadora)
 * @param {Array<number>} puntosJugadores Array con los puntos de cada jugador
 * @param {HTMLElement} smalls Elemento HTML para mostrar los puntos
 * @returns {number} Los puntos acumulados por jugador
 */
export const acumularPuntos = (carta, turno, puntosJugadores, smalls) => { // OPTIMIZACIÓN
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    smalls[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
};
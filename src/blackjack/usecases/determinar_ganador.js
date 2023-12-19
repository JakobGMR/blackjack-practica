/**
 * @param {Array<number>} puntosJugadores Array de number con los puntos por cada jugador
 */
// Turno: 0 = primer jugador y el último será la computadora
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores; // Destructuración

    setTimeout(() => {
        if (puntosMinimos > 21) {
            alert('Perdiste');
        }
        else if(puntosComputadora === puntosMinimos && puntosMinimos === 21) {
            alert('Empate');
        }
        else if(puntosComputadora > puntosMinimos && puntosComputadora <= 21) {
            alert('Perdiste');
        }
        else {
            alert('Ganaste');
        }
    }, 100);
};
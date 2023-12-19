
/**
 * 
 * @param {string} carta String con el nombre de la carta
 * @param {number} turno Número del turno del jugador (El último siempre es la computadora)
 */

const divCartasJugadores = document.querySelectorAll('.div-cartas');

export const crearCarta = (carta, turno) => {
    if(!carta) throw new Error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; // 3H, JD
    imgCarta.classList.add('carta');

    divCartasJugadores[turno].append(imgCarta);
};
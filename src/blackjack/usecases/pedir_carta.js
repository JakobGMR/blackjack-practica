/**
 * Obtienes el nombre de la carta
 * @param {Array<string>} deck Array de cartas
 * @returns {string} Una carta (nombre)
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) throw new Error('deck es obligatorio');
    // Validación un poco innecesaria en mi opinión
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    return deck.shift(); // OPTIMIZACÓN
};
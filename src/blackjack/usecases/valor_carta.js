/**
 * Arroja el valor que tiene cada carta
 * @param {string} carta Nombre de la carta
 * @returns {number} El valor que tiene cada carta
 */
export const valorCarta = (carta) => {
    if (!carta) throw new Error('El string carta es obligatorio');

    const valor = carta.substring(0, carta.length - 1);
    
    return (!isNaN(valor)) ? valor * 1 // Una forma de convertir valor de string a tipo number
                : (valor === 'A') ? 11 : 10;
};
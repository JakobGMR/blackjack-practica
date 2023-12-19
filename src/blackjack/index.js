import _ from 'underscore';
// import { crearDeck as crearNuevoDeck} from "./usecases/crear_deck"; // con as Renombras o le pones un ALIAS, por si ya 
//                                                                     tienes una función con el mismo nombre
// import { crearDeck } from "./usecases/crear_deck"; // modulo INDIVIDUAL, por destructurización
// import crearDeck, {miNombre} from "./usecases/crear_deck"; // modulo por defecto
// import {pedirCarta} from './usecases/pedir_carta';
// import { valorCarta } from './usecases/valor_carta';
import {crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta} from './usecases'; // Busca siempre el index

// BlackJack consiste en conseguir un numero igual o cercano a 21, si te pasas entonces pierdes

  'use strict'; // Se recomienda usarlo a la hora de usar modulos

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'], // valores de las cartas
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  // Referencias HTML
  const btnNuevo = document.querySelector('#btnNuevo'),
        btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        divCartasJugadores = document.querySelectorAll('.div-cartas'),
        smalls = document.querySelectorAll('small'); // Metodo usado en el video


  const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];

      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }

      smalls.forEach(elem => elem.innerText = 0); // OPTIMIZACIÓN

      divCartasJugadores.forEach(elem => elem.innerHTML = ''); // OPTIMIZACIÓN

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  };

  // Eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);

      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, smalls); // OPTIMIZACIÓN

      crearCarta(carta, 0); // OPTIMIZACIÓN

      if (puntosJugador >= 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador, puntosJugadores, smalls, deck);
      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugadores[0], puntosJugadores, smalls, deck);
  });

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });
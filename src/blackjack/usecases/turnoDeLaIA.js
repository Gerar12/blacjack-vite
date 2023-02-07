"use strict";
import {
  quienGana,
  puntosJugadores,
  pedirCarta,
  acumularPuntos,
  crearCartasAlHTML,
} from "./";

export const turnoDeLaIA = (puntosJugador, dect) => {
  do {
    const carta = pedirCarta(dect);
    acumularPuntos(carta, 1);
    crearCartasAlHTML(1, carta);
  } while (puntosJugadores[1] < puntosJugador && 21 >= puntosJugador);

  quienGana();
};

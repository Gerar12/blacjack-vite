"use strict";
import {
  cambiarEstadosdeBotones,
  pedirCarta,
  turnoDeLaIA,
  dect,
  acumularPuntos,
  crearCartasAlHTML,
} from "./";

export const funcionPedirCarta = () => {
  const carta = pedirCarta(dect);
  const puntosJugador = acumularPuntos(carta, 0);
  crearCartasAlHTML(0, carta);
  //Logica del juego
  if (puntosJugador > 21) {
    cambiarEstadosdeBotones();
    turnoDeLaIA(puntosJugador, dect);
  } else if (puntosJugador === 21) {
    cambiarEstadosdeBotones();
    turnoDeLaIA(puntosJugador, dect);
  }
};

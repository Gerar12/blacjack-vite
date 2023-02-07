"use strict";
import { puntosJugadores, valorCarta } from "./";

export const sumaDelJugador = document.querySelectorAll("small");

export const acumularPuntos = (carta, turno) => {
  // 0 = jugador.... 1 = IA
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  sumaDelJugador[turno].textContent = puntosJugadores[turno];
  return puntosJugadores[turno];
};

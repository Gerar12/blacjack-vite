"use strict";
import { puntosJugadores } from "./";

export const quienGana = () => {
  setTimeout(() => {
    if (puntosJugadores[1] >= puntosJugadores[0] || puntosJugadores[0] > 21) {
      if (puntosJugadores[1] <= 21) {
        alert("Gana IA");
      } else {
        alert("Gana Jugador");
      }
    }
  }, 600);
};

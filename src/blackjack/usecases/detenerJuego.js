"use strict";
import {
  dect,
  cambiarEstadosdeBotones,
  puntosJugadores,
  turnoDeLaIA,
} from "./";

export const detenerJuego = () => {
  cambiarEstadosdeBotones();
  turnoDeLaIA(puntosJugadores[0], dect);
};

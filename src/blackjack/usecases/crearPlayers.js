"use strict";
import { crearDeck } from "./";
export let puntosJugadores = [];
// Crea el numero de jugadores con un array
export const inciarEljuego = (numJugadores = 1) => {
  crearDeck();
  puntosJugadores = [];
  for (let i = 0; i <= numJugadores; i++) {
    puntosJugadores.push(0);
  }
};

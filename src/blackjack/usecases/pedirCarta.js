"use strict";
/**
 * Esto saca y verifica que haya una carta en la baraja
 * @param {Array} dect
 * @returns Elimina la ultima carta dela baraja
 */
export const pedirCarta = (dect) => {
  if (dect.length === 0) {
    throw "No hay cartas";
  }

  delete dect.pop;
  return dect.pop();
};

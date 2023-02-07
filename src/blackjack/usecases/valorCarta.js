"use strict";
/**
 * Le da valor ala carta dependiendo si es especial o normal
 * @param {carta} carta
 * @returns retorna el tipo de valor dela carta
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor)
    ? (carta = valor === "A" ? 11 : 10)
    : (carta = Number(valor));
};

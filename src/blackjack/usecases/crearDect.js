"use strict";
import _ from "underscore";
export let dect = [];

export const crearDeck = () => {
  const tiposDeCarta = ["C", "D", "H", "S"],
    tiposEspecialesDeCarta = ["K", "Q", "J", "A"];

  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new "Tipo de carta es obligatorio como un arreglo de string"();
  if (!tiposDeCarta || !tiposEspecialesDeCarta.length === 0)
    throw new "Tipo de cartas especiales es obligarotio como un arreglo"();

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      dect.push(`${i}${tipo}`);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let especiales of tiposEspecialesDeCarta) {
      dect.push(`${especiales}${tipo}`);
    }
  }

  return (dect = _.shuffle(dect));
};

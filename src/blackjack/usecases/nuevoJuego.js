"use strict";
import { inciarEljuego, crearDeck, sumaDelJugador } from "./";

const cartasHTML = document.querySelectorAll(".cardDiv");
const btnDetener = document.querySelector("#btnDetener");

export const nuevoJuego = () => {
  let dect = [];
  inciarEljuego();
  dect = crearDeck();
  btnDetener.removeAttribute("disabled");
  btnPedirCartas.removeAttribute("disabled");
  cartasHTML.forEach((e) => (e.textContent = ""));
  sumaDelJugador.forEach((e) => (e.textContent = 0));
};

"use strict";

const btnPedirCartas = document.querySelector("#btnPedirCartas");
const btnDetener = document.querySelector("#btnDetener");
//Esta funcion cambia los botones de estado
export const cambiarEstadosdeBotones = () => {
  btnPedirCartas.setAttribute("disabled", "true");
  btnDetener.setAttribute("disabled", "true");
};

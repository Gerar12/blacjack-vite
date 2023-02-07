"use strict";
const cartasHTML = document.querySelectorAll(".cardDiv");

export const crearCartasAlHTML = (player, carta) => {
  const nuevaCartaImg = document.createElement("img");
  nuevaCartaImg.classList.add("carta");
  nuevaCartaImg.setAttribute("src", `/assets/img/${carta}.png`);
  cartasHTML[player].appendChild(nuevaCartaImg);
};

import _ from "underscore";
import {
  crearDeck,
  inciarEljuego,
  nuevoJuego,
  funcionPedirCarta,
  detenerJuego,
} from "./usecases/index";

(() => {
  "use strict";

  //Variables para los eventos
  const btnNuevoJuego = document.querySelector("#btnNuevoJuego"),
    btnPedirCartas = document.querySelector("#btnPedirCartas"),
    btnDetener = document.querySelector("#btnDetener");

  inciarEljuego(); //Comienza el game al cargar la pagina

  //Eventos
  btnPedirCartas.addEventListener("click", funcionPedirCarta);
  // turno dela IA
  btnDetener.addEventListener("click", detenerJuego);
  //Evento nuevo juego boton
  btnNuevoJuego.addEventListener("click", nuevoJuego);
})();

console.log("Pura mrd");

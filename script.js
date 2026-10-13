let vidaJugador = 100;
const limiteInferiorUsoPocion = 50;
const limiteSuperiorVida = 100;
let cantidadPociones = 3;

const intervaloJuego = setInterval(() => {
  vidaJugador -= 5;
  console.log(`Vida actual: ${vidaJugador} | Pociones restantes: ${cantidadPociones}`);

  if (vidaJugador < limiteInferiorUsoPocion && cantidadPociones > 0) {
    cantidadPociones--;
    vidaJugador += 30;

    if (vidaJugador > limiteSuperiorVida) {
      vidaJugador = limiteSuperiorVida;
    }

    console.log(`¡Poción utilizada! Vida curada a: ${vidaJugador}. Pociones restantes: ${cantidadPociones}`);
  }

  if (vidaJugador <= 0) {
    console.log("El jugador ha quedado fuera de combate (Vida: 0).");
    clearInterval(intervaloJuego);
  }
}, 2000);


const pokedex = [
  { nombre: "Pokeball", cantidad: 5, tipo: "Normal" },
  { nombre: "Repel", cantidad: 3, tipo: "Normal" },
  { nombre: "Quick Attack", cantidad: 2, tipo: "TM" },
  { nombre: "Surf", cantidad: 3, tipo: "TM" },
  { nombre: "Soda Pop", cantidad: 10, tipo: "Consumable" }
];

function organizarBolsa(elementos) {
  const normales = elementos.filter(item => item.tipo === "Normal");
  const tms = elementos.filter(item => item.tipo === "TM");
  const consumibles = elementos.filter(item => item.tipo === "Consumable");

  const ordenarPorCantidad = (a, b) => b.cantidad - a.cantidad;

  normales.sort(ordenarPorCantidad);
  tms.sort(ordenarPorCantidad);
  consumibles.sort(ordenarPorCantidad);

  console.log("Objetos Normales:", normales);
  console.log("Objetos TM:", tms);
  console.log("Objetos Consumibles:", consumibles);
}

organizarBolsa(pokedex);


const pikachu = {
  nombre: "Pikachu",
  tipo: "Eléctrico",
  ataque: "Impacto",
  daño: 20,
  vida: 50,
  defensa: 10
};

const charmander = {
  nombre: "Charmander",
  tipo: "Fuego",
  ataque: "Lanzallamas",
  daño: 25,
  vida: 50,
  defensa: 5
};

function calcularAtaque(atacante, defensor) {
  console.log(`${atacante.nombre} usa ${atacante.ataque} contra ${defensor.nombre}!`);

  const dañoEfectivo = Math.max(0, atacante.daño - defensor.defensa);
  defensor.vida = Math.max(0, defensor.vida - dañoEfectivo);

  console.log(`Daño base: ${atacante.daño} | Defensa de ${defensor.nombre}: ${defensor.defensa}`);
  console.log(`Daño infligido: ${dañoEfectivo}`);
  console.log(`Vida restante de ${defensor.nombre}: ${defensor.vida}`);
}

calcularAtaque(pikachu, charmander);
const entrada = document.getElementById("entradaPar");
const btn = document.getElementById("btnPar");
const salida = document.getElementById("salida");

let numero = "";
entrada.addEventListener("input", (evento) => {
  console.log(evento.target.value);
  numero = evento.target.value;
});

btn.addEventListener("click", () => {
  if (numero < 0 || numero == undefined || numero == "") {
    let hijo = document.createElement("h3");
    hijo.className = "error";
    hijo.innerHTML = "El número esta vacío o está mal escrito";
    salida.appendChild(hijo);
  } else if (numero % 2 == 0) {
    let hijo = document.createElement("h3");
    hijo.className = "verde";
    hijo.innerHTML = `El número ${numero} es PAR`;
    salida.appendChild(hijo);
  } else {
    let hijo = document.createElement("h3");
    hijo.className = "azul";
    hijo.innerHTML = "El número " + numero + " es IMPAR";
    salida.appendChild(hijo);
  }
});

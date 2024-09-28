let numeroDigitado = document.getElementById("numPrimo");
let btn = document.getElementById("btnCalcular");
let salida = document.getElementById("resultado");

let numero = 0;
numeroDigitado.addEventListener("input", (evento) => {
  numero = evento.target.value;
});

function numeroPrimo(n) {
  let esPrimo = false;
  let contador = 0;
  if (n === 1) {
    esPrimo = false;
  } else {
    for (let i = 2; i <= n; i++) {
      if (n % i == 0) {
        contador = contador + 1;
      }
    }
    if (contador == 1) {
      return (esPrimo = true);
    }
  }
  return esPrimo;
}

btn.addEventListener("click", () => {
  if (numero != "") {
    let resultado = numeroPrimo(numero);
    let hijo = document.createElement("h3");
    if (resultado) {
      hijo.innerHTML = `El ${numero} <strong>SI</strong> es un número primo`;
      hijo.className = "exito";
    } else {
      hijo.innerHTML = `El ${numero} <strong>NO</strong> es un número primo`;
      hijo.className = "error";
    }
    salida.appendChild(hijo);
  } else {
    let hijo = document.createElement("h3");
    hijo.innerHTML = "Debe digitar un número positivo";
    hijo.className = "error";
    salida.appendChild(hijo);
  }
});

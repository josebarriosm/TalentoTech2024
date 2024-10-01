let numeroDigitado = document.getElementById("num1");
let btn = document.getElementById("btnCalcular");
let salida = document.getElementById("resultado");
let numero = 0;
let fibo = [0, 1];

numeroDigitado.addEventListener("input", (evento) => {
  numero = evento.target.value;
});

// Función para calcular la serie Fibonacci
function calcularFibo(n) {
  if (n == 0) {
    fibo = [0];
  } else if (n == 1) {
    fibo = [0, 1];
  } else {
    for (let i = 2; i <= n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
  }
  return fibo;
}

btn.addEventListener("click", () => {
  if (numero != "") {
    let resultado = calcularFibo(numero);
    let hijo = document.createElement("h3");
    hijo.innerHTML = `La serie de Fibonacci del número ${numero} es => ${resultado}`;
    salida.appendChild(hijo);
  } else {
    let hijo = document.createElement("h3");
    hijo.innerHTML = "Debe digitar un número positivo mayor a 1";
    hijo.className = "error";
    salida.appendChild(hijo);
  }
});

let numeroDigitado1 = document.getElementById("num1");
let numeroDigitado2 = document.getElementById("num2");
let numeroDigitado3 = document.getElementById("numIteracion");
let btn = document.getElementById("btnCalcular");
let salida = document.getElementById("resultado");
let numero1 = 0;
let numero2 = 0;
let iteracion = 0;
let fibo = [0];

numeroDigitado1.addEventListener("input", (evento) => {
  numero1 = evento.target.value;
});
numeroDigitado2.addEventListener("input", (evento) => {
  numero2 = evento.target.value;
});
numeroDigitado3.addEventListener("input", (evento) => {
  iteracion = evento.target.value;
});

// Función para calcular la serie Fibonacci
function calcularFibo(n1, n2, it) {
  if (n1 == 0) {
    fibo = [0];
  } else {
    fibo = [parseFloat(n1), parseFloat(n2)];
    for (let i = 2; i < it; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
  }
  return fibo;
}

btn.addEventListener("click", () => {
  if (numero1 != "" && numero2 != "" && iteracion != "") {
    let resultado = calcularFibo(numero1, numero2, iteracion);
    let hijo = document.createElement("h3");
    hijo.innerHTML = `La serie de Fibonacci de los números ${numero1} y ${numero2} es => ${resultado}`;
    salida.appendChild(hijo);
  } else {
    let hijo = document.createElement("h3");
    hijo.innerHTML = "Debe digitar los tres números que sean positivos";
    hijo.className = "error";
    salida.appendChild(hijo);
  }
});

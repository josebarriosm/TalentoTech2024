let entrada1 = document.getElementById("num1");
let entrada2 = document.getElementById("num2");
let btnC = document.getElementById("btnCalcular");
let salida = document.getElementById("resultado");

let numero1 = 0;
let numero2 = 0;
//capturar los números desde el navegador
entrada1.addEventListener("input", (evento) => {
  numero1 = evento.target.value;
});
entrada2.addEventListener("input", (evento) => {
  numero2 = evento.target.value;
});
// se crea la función de multiplicación
function multiplicacion(number1, number2) {
  return number1 * number2;
}
// uso la función de multiplicación cuando le doy click al botón y creo el elemento h3 y lo agrego para mostrar el resultado
btnC.addEventListener("click", () => {
  if (numero1 != "" && numero2 != "") {
    let resultado = multiplicacion(numero1, numero2);
    let hijo = document.createElement("h3");
    //hijo.innerHTML = numero1 + " x " + numero2 + " = " + resultado;
    hijo.className = "exito";
    hijo.innerHTML = `${numero1} x ${numero2} = ${resultado}`;
    salida.appendChild(hijo);
  } else {
    let hijo = document.createElement("h3");
    hijo.className = "error";
    hijo.innerHTML = "Debe digitar dos números";
    salida.appendChild(hijo);
  }
});

let resultado = multiplicacion(5, 5);
console.log(resultado);

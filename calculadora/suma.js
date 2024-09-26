let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
const btn = document.getElementById("calcular");
let resultado = document.getElementById("resultado");
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

btn.addEventListener("click", () => {
  let numero1 = num1.value;
  let numero2 = num2.value;
  if ((numero1 != "") & (numero2 != "")) {
    let suma = parseFloat(numero1) + parseFloat(numero2);
    resultado.value = formatter.format(suma);
  } else {
    alert("Debe ingresar dos números para sumarlos");
  }
});

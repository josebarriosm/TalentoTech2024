const botones = document.querySelectorAll(".btn");
const pantalla = document.querySelector("#pantalla");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;
    if (botonApretado == "AC") {
      pantalla.textContent = 0;
    } else if (botonApretado == "⇦") {
      if (pantalla.textContent.length == 1) {
        pantalla.textContent = 0;
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
    } else if (botonApretado == "=") {
      capturaP = reemplazarSimbolos(pantalla.textContent);
      try {
        pantalla.textContent = eval(capturaP);
        //pantalla.textContent = Intl.NumberFormat("es-419").format(resultado);
      } catch (error) {
        pantalla.textContent = "Error!";
      }
    } else if (botonApretado == "%") {
      capturaP = reemplazarSimbolos(pantalla.textContent);
      try {
        pantalla.textContent = eval(capturaP) * 0.01;
      } catch (error) {
        pantalla.textContent = "Error!";
      }
    } else if (botonApretado == "±") {
      try {
        capturaP = reemplazarSimbolos(pantalla.textContent);
        pantalla.textContent = eval(capturaP) * -1;
      } catch (error) {
        pantalla.textContent = "Error!";
      }
    } else {
      if (pantalla.textContent == "0" || pantalla.textContent == "Error!") {
        pantalla.textContent = botonApretado;
      } else {
        pantalla.textContent = pantalla.textContent + botonApretado;
      }
    }
  });
});

function reemplazarSimbolos(numero) {
  capturaP = numero.replace(/÷/g, "/").replace(/×/g, "*");
  return capturaP;
}

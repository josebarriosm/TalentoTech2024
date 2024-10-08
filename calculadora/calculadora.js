const botones = document.querySelectorAll(".btn");
const pantalla = document.querySelector("#pantalla");

botones.forEach((boton) => {
  //console.log("clic boton");
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;
    //pantalla.textContent = botonApretado;
    if (botonApretado == "AC") {
      pantalla.textContent = 0;
    } else if (botonApretado == "⇦") {
      if (pantalla.textContent.length == 1) {
        pantalla.textContent = 0;
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
    } else if (botonApretado == "=") {
      capturaP = pantalla.textContent.replace(/÷/g, "/").replace(/×/g, "*");
      try {
        pantalla.textContent = eval(capturaP);
      } catch (error) {
        pantalla.textContent = "Error!";
      }
    } else if (botonApretado == "%") {
      capturaP = pantalla.textContent.replace(/÷/g, "/").replace(/×/g, "*");
      try {
        pantalla.textContent = eval(capturaP) * 0.01;
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

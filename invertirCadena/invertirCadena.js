let salida = document.getElementById("resultado");
let respuesta = document.createElement("p");

function invertirCadena() {
  let palabra = document.getElementById("cadena").value;
  if (palabra != "") {
    let nuevaCadena = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
      nuevaCadena += palabra[i];
    }
    //return nuevaCadena;
    salida.innerHTML = "";
    respuesta.innerHTML =
      "La frase o palabra invertida es:<br/><strong>" +
      nuevaCadena +
      "</strong>";
    respuesta.className = "exito";
    salida.appendChild(respuesta);
  } else {
    salida.innerHTML = "";
    respuesta.innerHTML = "No hay ninguna palabra o frase a invertir";
    respuesta.className = "error";
    salida.appendChild(respuesta);
  }
}

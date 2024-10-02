let salida = document.getElementById("resultado");
let campos = document.getElementsByName("array");

function arrayMaps() {
  let respuesta = document.createElement("h3");
  let validacion = 0;

  for (let c = 0; c < campos.length; c++) {
    if (campos[c].value != "") {
      validacion = validacion + 1;
    }
  }

  if (validacion == campos.length) {
    let crearArray = [];
    for (let i = 0; i < campos.length; i++) {
      arrayValues = campos[i].value;
      crearArray.push(arrayValues);
    }
    let nuevoArray = crearArray.map((elemento) => parseInt(elemento, 10) + 1);
    let sumatoria = nuevoArray.reduce(
      (acumulado, total) => acumulado + total,
      0
    );

    salida.innerHTML = "";
    respuesta.innerHTML =
      "El nuevo array de números es => " +
      nuevoArray +
      "<br/>La sumatoria de todos los números es => " +
      sumatoria;
    salida.appendChild(respuesta);
    console.log(nuevoArray);
  } else {
    respuesta.innerHTML = "Debe digitar todos los números";
    respuesta.className = "error";
    salida.appendChild(respuesta);
  }
}

let listaMercado = ["Arroz", "Aceite", "Pan", "Harina"];
console.log(listaMercado);
console.log(listaMercado.length);
listaMercado.push("Carne de cerdo");

listaMercado.forEach((item, index) => {
  console.log(item + " - " + index);
});

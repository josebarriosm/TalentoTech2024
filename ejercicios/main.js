console.log(
  "FUNCION PUSH Y FOREACH ------------------------------------------ "
);
let listaMercado = ["Arroz", "Aceite", "Pan", "Harina"];
console.log("Se pinta el array -> " + listaMercado);
console.log("Longitud del array con length -> " + listaMercado.length); // Con length se conoce el número total de ítems que tiene el arreglo
listaMercado.push("Carne de cerdo (adicionado con push en el array)"); // Adicionamos una nueva línea al array
console.log("A continuación se recorre el array con forEach ->");
listaMercado.forEach((item, index) => {
  console.log(index + " - " + item); // Con forEach se recorre el array y se pinta en consola y el index va pintando la posición del elemento en el array
});

/* CON MAP ----------------------------------------------------------*/

const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map((x) => x + 1);
console.log("\nFUNCION MAP ------------------------------------------ ");
console.log("Array original de números -> " + array1);
console.log(
  "Nuevo array modificado sumando un 1 a cada elemento con map -> " + map1
);

const cart = [5, 15, 25];
console.log("\nArray de precios original -> " + cart);
const total = cart.reduce((acc, cost) => acc + cost, 0);
console.log(
  "La sumatoria del costo total sin impuestos hecho con reduce -> " + total
);
const withTax = cart.map((cost) => cost * 1.2);
console.log("Los precios con impuestos hecho con map -> " + withTax);
const totalTaxes = withTax.reduce((accT, costTaxes) => accT + costTaxes, 0);
console.log(
  "La sumatoria del costo total con impuestos hecho con reduce -> " + totalTaxes
);

/* FIZZ ----------------------------------------------------------*/
console.log("\nFIZZBUZZ ------------------------------------------ ");
for (let i = 1; i <= 100; i++) {
  let numero = i;
  multiploDe3 = numero % 3;
  multiploDe5 = numero % 5;

  if (multiploDe3 == 0 && multiploDe5 == 0) {
    console.log("fizzbuzz");
  } else if (multiploDe3 == 0) {
    //console.log(`El número ${numero} es múltiplo de 3`);
    console.log("fizz");
  } else if (multiploDe5 == 0) {
    //console.log(`El número ${numero} es múltiplo de 5`);
    console.log("buzz");
  } else {
    console.log(numero);
  }
}

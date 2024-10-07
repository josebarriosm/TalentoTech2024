const btnChistes = document.getElementById("btnChiste");
const chiste = document.getElementById("chiste");

btnChistes.addEventListener("click", generarChiste);

async function generarChiste() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  chiste.innerHTML = "<h3>" + data.joke + "</h3>";
  console.log(data);
}

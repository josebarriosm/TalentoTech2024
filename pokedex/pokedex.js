const pokemonList = document.getElementById("pokemon-list");

async function fetchPokemonData(pokemonID) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
  );
  const pokemon = await response.json();
  return pokemon;
}

function displayPokemon(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card");
  pokemonCard.innerHTML = `
  <div class="pokemon-title"><span class="pokemon-id">${
    pokemon.id
  }</span><h3>${pokemon.name.toUpperCase()}</h3>    </div>  
  <div class="pomekon-img">
  <img src = "${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
  </div>
  <p><strong>Habilidades:</strong></p>    
    <ul>
    <li>${pokemon.moves[0].move.name}</li>
    <li>${pokemon.moves[1].move.name}</li>    
    </ul>
    `;
  pokemonList.appendChild(pokemonCard);
  return;
}

async function loadPokedex() {
  for (let i = 1; i <= 50; i++) {
    const pokemon = await fetchPokemonData(i);
    displayPokemon(pokemon);
  }
  return;
}

loadPokedex();

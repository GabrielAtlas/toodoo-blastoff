async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  if (response.ok) {
    // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();

    const lista = document.getElementById("lista-pokemons");

    json.results.forEach((pokemon) => {
      const pokemonElement = document.createElement("li");
      pokemonElement.textContent = pokemon.name;
      lista.appendChild(pokemonElement);
    });

    console.log(json);
  }
}

getPokemons();

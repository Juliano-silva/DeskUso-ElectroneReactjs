const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonPromises = []
    for (let i = 1; i <= 1009 ; i++){
    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }
    Promise.all(pokemonPromises)
    .then(pokemons => {
    const lisPokemons = pokemons.reduce((accumulator,pokemon) => {
      const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator +=
        `
        <div id="pokemons">
        <li>
        <img id="imagePokemon"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
        <li id="idPK">Nº${pokemon.id}</id>
        <li id="NomePoke">${pokemon.name}</li>
        <li id="Type">${types.join(' / ')}</li>
        </li>
        </div>
        `
        return accumulator
    },'')
    const ul = document.querySelector('[data-js="pokemons"]')
    ul.innerHTML = lisPokemons
})
}
fetchPokemon()
export default function Pokedex(){
    return(
    <ul data-js="pokemons" class="Container"></ul>
        )
}

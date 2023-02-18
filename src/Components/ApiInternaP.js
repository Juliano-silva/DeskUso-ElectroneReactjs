import style from './Style.module.css'
const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonPromises = []
    for (let i = 1; i <= 1008 ; i++){
    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }
    Promise.all(pokemonPromises)
    .then(pokemons => {
    const lisPokemons = pokemons.reduce((accumulator,pokemon) => {
      const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator +=
        `
        <div id="PokedexCorpo">
        <li>
        <img id="imagePokemon"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
        <li id="idPK"><h1>Nº${pokemon.id}</h1></id>
        <li id="NomePoke"><h2>${pokemon.name}</h2></li>
        <li id="Type"><h3>${types.join(' / ')}</h3></li>
        </li>
        </div>
        `
        return accumulator
    },'')
    const ul = document.querySelector('[data-js="pokemons"]')
    ul.classList = style.ListPokemon
    ul.innerHTML = lisPokemons
})
}
fetchPokemon()
export default function Pokedex(){
    return(
        <div className={style.Container}>
    <ul data-js="pokemons" class="Container"></ul>
    </div>
        )
}

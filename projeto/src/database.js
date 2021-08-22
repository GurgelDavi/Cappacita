const sequence = {
    _id : 1,
    get id() {return this._id++}
}

const pokemons = []

function salvarPokemons(pokemon) {
    if(!pokemon.id) pokemon.id = sequence.id
    pokemons[pokemon.id] = pokemon
    return pokemon
}

function mostrarPokemon(id){
    return pokemons[id] || {}
}

function mostrarPokemons(){
    return Object.values(pokemons)
}
function atualizarPokemons(id, pokemon){
    pokemons[id] = pokemon
    return pokemon
}
function deletarPokemon(id){
    sequence._id = sequence._id - 1
    const pkmnDeletado = pokemons[id]
    pokemons.splice(id,1);
    pokemons.forEach(pokemon => {
        if(pokemon.id > id) {
            pokemon.id = pokemon.id -1
        }       
    });
    return pkmnDeletado
}
function batalhaPokemon(id1,id2){
    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10

    const pkmn1 = pokemons[id1]
    const pkmn2 = pokemons[id2]

    if(pkmn1.hp!=0 && pkmn2.hp != 0) {
        if(pkmn1.tipo==pkmn2.fraqueza){
            pkmn2.hp = pkmn2.hp - superEfetivo
        } else if (pkmn1.tipo==pkmn2.resitencia){
            pkmn2.hp = pkmn2.hp = naoEfetivo
        } else {
            pkmn2.hp = pkmn2.hp = efetivo
        }
    }
    if(pkmn1.hp!=0 && pkmn2.hp != 0) {
        if(pkmn2.tipo==pkmn1.fraqueza){
            pkmn1.hp = pkmn1.hp - superEfetivo
        } else if (pkmn2.tipo==pkmn1.resitencia){
            pkmn1.hp = pkmn1.hp = naoEfetivo
        } else {
            pkmn1.hp = pkmn1.hp = efetivo
        }
    }
    if (pkmn1.hp<0) pkmn1.hp = 0
    if (pkmn2.hp<0) pkmn2.hp = 0
    return '${pkmn1.nome} : ${pkmn1.hp} / ${pkmn2.nome} : ${pkmn2.hp}'  
}
function pocaoPokemon(id){

}
module.exports = {salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemons, deletarPokemon, batalhaPokemon}
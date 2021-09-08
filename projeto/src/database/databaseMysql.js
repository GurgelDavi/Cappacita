const { databaseConnection } = require('./connection')

const pokemons = []

async function salvarPokemons(pokemon) {
     /* 
        pokemon = {
            nome : 'pikachu',
            tipo : 'electric',
            fraqueza: 'ground',
            resistencia : 'electric',
            hp : 100
        }
     */
    const queryInsertPokemon = `INSERT INTO pokemon.pokemons (nome_pokemon, tipo, fraqueza, resistencia) VALUES ('${pokemon.nome}', '${pokemon.tipo}', '${pokemon.fraqueza}', '${pokemon.resistencia}');`
    
    const result = await databaseConnection.raw(queryInsertPokemon)
    //console.log(result);
    if (result){
        return {
            id: result[0].insertId,
            nome:pokemon.nome,
            tipo : pokemon.tipo,
            fraqueza : pokemon.fraqueza,
            resistencia : pokemon.resistencia,
            hp : 100
        }
    }else{
        console.error('Deu Erro')
        return {
            error : "Erro na inserção" 
        }
    }
}

async function mostrarPokemon(id){
    const queryGetPokemon = `SELECT * FROM pokemon.pokemons WHERE id = '${id}';`
    const result = await databaseConnection.raw(queryGetPokemon)
    console.log(result);
    if(result){
        return result[0]
    }else{
        console.error('Deu Erro')
        return {
            error : "Erro na consulta por id" 
        }
    }
}

async function mostrarPokemons(){
    
    const queryGetPokemon = `SELECT * FROM pokemon.pokemons ;`
    const result = await databaseConnection.raw(queryGetPokemon)
    
    if(result){
        return result[0]
    }else{
        console.error('Deu Erro')
        return {
            error : "Erro na consulta por id" 
        }
    }
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

    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    if(pokemon1.hp != 0 && pokemon2.hp != 0){
        if(pokemon1.tipo==pokemon2.fraqueza){
            pokemon2.hp = pokemon2.hp - superEfetivo 
        }else if (pokemon1.tipo == pokemon2.resistencia){
            pokemon2.hp = pokemon2.hp - naoEfetivo
        }else {
            pokemon2.hp = pokemon2.hp - efetivo
        }
    }

    if(pokemon2.hp != 0 && pokemon1.hp != 0){
        if(pokemon2.tipo==pokemon1.fraqueza){
            pokemon1.hp = pokemon1.hp - superEfetivo 
        }else if (pokemon2.tipo == pokemon1.resistencia){
            pokemon1.hp = pokemon1.hp - naoEfetivo
        }else {
            pokemon1.hp = pokemon1.hp - efetivo
        }
    }

    

    if (pokemon1.hp<0) pokemon1.hp = 0
    if (pokemon2.hp<0) pokemon2.hp = 0
    return `${pokemon1.nome} : ${pokemon1.hp} / ${pokemon2.nome} : ${pokemon2.hp}`
}
function curaPokemon(id){
    pokemon = pokemons[id]
    pokemon.hp +=20
    if (pokemon.hp>100) pokemon.hp = 100
    return`${pokemon.nome} está com ${pokemon.hp} de hp`;
}
module.exports = {
    salvarPokemons, mostrarPokemon, mostrarPokemons, 
    atualizarPokemons, deletarPokemon, batalhaPokemon,
    curaPokemon
}
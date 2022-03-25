const fetchpokemon = () =>{
    const Poke_name = document.getElementById("Poke_name")
    let Poke_input = Poke_name.value.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${Poke_input}`;
    fetch(url).then((res) => {
        if (res.status != "200")
        console.log("No funciona, prueba escribirlo de una forma distinta :(")
        else {
            console.log(res);
        }
        return res.json();
    }).then((data) =>{
        console.log(data)
     let type = data.types[0].type.name
     let poke_name = data.name
     let poke_hp =("Hp: ") + data.stats[0].base_stat
     let poke_attack =("Ataque: ") + data.stats[1].base_stat
     let poke_defense =("Defensa: ") + data.stats[2].base_stat
     let poke_special_attack =("Ataque especial: ") + data.stats[3].base_stat
     let poke_special_defense =("Defensa especial: ") + data.stats[4].base_stat
     let poke_speed =("Velocidad ") + data.stats[5].base_stat
     let poke_image = data.sprites.front_default
    Poke_sprite(poke_image)
    document.getElementById("type").textContent =("Tipo: ") + type
    document.getElementById("poke_name").textContent = poke_name
    document.getElementById("poke_hp").textContent = poke_hp
    document.getElementById("poke_attack").textContent = poke_attack
    document.getElementById("poke_defense").textContent = poke_defense
    document.getElementById("poke_special_attack").textContent = poke_special_attack
    document.getElementById("poke_special_defense").textContent = poke_special_defense
    document.getElementById("poke_speed").textContent = poke_speed
    })
}
//fetchpokemon()

const imprimir = () => {
    const Poke_name = document.getElementById("Poke_name")
    let Poke_input = Poke_name.value
    console.log(Poke_input)
}

const Poke_sprite =(url) => {
    const Poke_sprite = document.getElementById("Poke_sprite")
    Poke_sprite.src = url
}

const Poke_attack = (url) =>{
    const Poke_attack = document.getElementById("poke_attack")
}
const reload = () =>{
    window.location.reload()
}


//let poke_attack = data.stats.[1].base_stat
 //Poke_sprite("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")
const fetchpokemon = () =>{
    const Poke_name = document.getElementById("Poke_name")
    let Poke_input = Poke_name.value.toLowerCase()
    if (Poke_input == undefined)
    document.getElementById("Error").textcontent = "Prueba escribir algo"
    const url = `https://pokeapi.co/api/v2/pokemon/${Poke_input}`;
    fetch(url).then((res) => {
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

const reload = () =>{
    window.location.reload()
}

const unown = () =>{
     const url = `https://pokeapi.co/api/v2/pokemon/unown`;
     fetch(url).then((res) =>{
        if (res.status == "200")
        console.log(res)
        return res.json()
     }).then((data) => {
        console.log(data)
      let unown_sprite = data.sprites.front_default
      let unown_stats= data.stats[0].base_stat
      Unown_sprite(unown_sprite)
      document.getElementById("poke_name").textContent=data.name
      document.getElementById("poke_hp").textContent =("Hp") + unown_stats
      document.getElementById("poke_attack").textContent =("Ataque: ") + data.stats[1].base_stat
      document.getElementById("poke_defense").textContent =("Defensa: ") + data.stats[2].base_stat
      document.getElementById("poke_special_attack").textContent =("Ataque especial: ") + data.stats[3].base_stat
      document.getElementById("poke_special_defense").textContent =("Defensa especial: ") + data.stats[4].base_stat
      document.getElementById("poke_speed").textContent =("Velocidad: ") + data.stats[5].base_stat
      document.getElementById("type").textContent= ("Tipo: ") + data.types[0].type.name
     })
}
const Unown_sprite =(url) =>{
    const Unown_sprite = document.getElementById("Poke_sprite")
    Unown_sprite.src = url
}
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload()
})
const Error = () =>{
    if (res.status != "200")
        document.getElementById("Error").textContent = "Prueba escribir de otra forma"
}

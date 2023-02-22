//Fetch request accessing the API pokiapi.co Using json this information is returned in the form of an Object
//and specific value is singled out using dot notation and logged to the console. I used console.table for 
//the abilities to keep the output looking neat and tidy in the terminal.
let userChoice = document.getElementById('user-choice')


userChoice.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("lets-go").click()
    }
})
//================
//GET DOM ELEMENTS
//================
//Left side of pokedex
//--------------------
let pokemonName   = document.querySelector('.pokemon-name')
let pokemonNumber = document.querySelector('.pokemon-number')
let pokemonImage  = document.getElementById('pokemon-image')

//Right side of pokidex
//---------------------

//Stats
let height   = document.querySelector('.height') 
let weight   = document.querySelector('.weight') 
let type     = document.querySelector('.type') 
let ability  = document.querySelector('.abilities') 
let ability2 = document.querySelector('.abilities2') 

//Base stats
let hitpoint = document.querySelector('.num-bHP') 
let attack   = document.querySelector('.num-bAttack') 
let defense  = document.querySelector('.num-bDefense') 
let sAttack  = document.querySelector('.num-bSAttack') 
let sDefense = document.querySelector('.num-bSDefense') 
let speed    = document.querySelector('.num-bSpeed') 


async function getPokemon() {
    let userPokemon = userChoice.value
    userChoice.value = ""
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${userPokemon}/`)
    let response = await data.json()
    console.log(response)
    //Name
    pokemonName.textContent   = response.name
    //Number
    pokemonNumber.textContent = "#" + response.id
    //Pic
    pokemonImage.src          = response.sprites.front_default
    pokemonImage.alt          = 'picture of: ' + response.name
    //Stats
    height.textContent        = response.height + "m"
    weight.textContent        = response.weight + "kg"
    type.textContent          = response.types[0].type.name
    //Abilities 
    ability.textContent       = response.abilities[0].ability.name
    ability2.textContent      = response.abilities[1].ability.name
    //Base Stats
    hitpoint.textContent      = response.stats[0].base_stat
    attack.textContent        = response.stats[1].base_stat
    defense.textContent       = response.stats[2].base_stat
    sAttack.textContent       = response.stats[3].base_stat
    sDefense.textContent      = response.stats[4].base_stat
    speed.textContent         = response.stats[5].base_stat
  
  }

getPokemon()

























// console.log(userPokemon)
// fetch(`https://pokeapi.co/api/v2/pokemon/${userPokemon}/`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(`Name: ${data.name}`)
//     console.log(`Weight: ${data.weight}`)
//     console.log(`Abilities:`)
//     console.table(data.abilities)
//   })
//   .catch(() => (console.log("Something went wrong!")));





















// async function getPokemon() {
//     try {
//       let data = await fetch(`https://pokeapi.co/api/v2/pokemon/absol/`)
//       let response = data.json()
//       console.log(response.name)
//       console.log(data.name)
//     } catch {
//       console.log("Something went wrong!")
//     }

// }
  
// getPokemon()


  //   .then(response => response.json())
  //   .then(data => {
      
  
  
  
  
  
  //     // console.log(`Name: ${data.name}`)
  //     // console.log(`Weight: ${data.weight}`)
  //     // console.log(`Abilities:`)
  //     // console.table(data.abilities)
  //   })
  //   .catch(() => (console.log("Something went wrong!")));
  // }
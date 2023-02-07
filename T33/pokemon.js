//Fetch request accessing the API pokiapi.co Using json this information is returned in the form of an Object
//and specific value is singled out using dot notation and logged to the console. I used console.table for 
//the abilities to keep the output looking neat and tidy in the terminal.
let userChoice = document.getElementById('user-choice')


userChoice.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        document.getElementById('submit').click()
    }
})
let userPokemon = userChoice.value
// let userPokemon = userChoice.value
console.log(userPokemon)
fetch(`https://pokeapi.co/api/v2/pokemon/${userPokemon}/`)
  .then(response => response.json())
  .then(data => {
    console.log(`Name: ${data.name}`)
    console.log(`Weight: ${data.weight}`)
    console.log(`Abilities:`)
    console.table(data.abilities)
  })
  .catch(() => (console.log("Something went wrong!")));





















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
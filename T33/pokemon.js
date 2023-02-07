//Fetch request accessing the API pokiapi.co Using json this information is returned in the form of an Object
//and specific value is singled out using dot notation and logged to the console. I used console.table for 
//the abilities to keep the output looking neat and tidy in the terminal.
fetch('https://pokeapi.co/api/v2/pokemon/absol/')
  .then(response => response.json())
  .then(data => {
    





    // console.log(`Name: ${data.name}`)
    // console.log(`Weight: ${data.weight}`)
    // console.log(`Abilities:`)
    // console.table(data.abilities)
    // console.log(data)
  })
  .catch(() => (console.log("Something went wrong!")));
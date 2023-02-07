//Fetch request accessing the API affirmations.dev Using json this information is returned in the form of an Object
//and specific value is singled out using dot notation and logged to the console.
fetch('https://www.affirmations.dev')          
.then(response => response.json())
.then(data => console.log("Your daily dose of affirmation...\n" + data.affirmation))
.catch(() => console.log("Uh oh! Something went wrong!"))







//=======================================
//CHUCK NORRIS FETCH API USED TO PRACTICE 
//=======================================

// fetch('https://api.chucknorris.io/jokes/random')         
// .then(response => response.json())
// .then(data => console.log(data.value));
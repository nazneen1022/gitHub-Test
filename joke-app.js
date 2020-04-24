// Joke app server
const importExpress = require('express');

// import the data
const jokes = require('./jokes')
console.log(jokes);

const min =1;
const max = parseInt(Object.keys(jokes).length);

const app = importExpress(); // create a server

app.listen(3000,()=>{console.log(`Listening to port 3000`)}); // listening to the port


app.get('/student/:name', (request, response) =>{
    
})


// GET endpoint with arg1: route and arg2: request and response
app.get("/Jokes/:age/:birthMonth", (request,response) => {
    const age = parseInt(request.params.age);
    const month = parseInt(request.params.birthMonth);
    const randomNum = Math.floor(Math.random() * (+max - +min)) + +min;

    if (request.params.age === "" || request.params.birthMonth === ""){
        res =`Your input URL must have two params (age and birth month)
        URL: localhost:3000/jokes/:age/:birthMonth

        Sample URL should look like
        localhost:3000/jokes/26/11`;
    }

    if (isNaN(age) || age > 110 || age < 3){
        res =`Your input ion the URL for age is invalid
        URL: localhost:3000/jokes/:age/:birthMonth

        Sample URL should look like
        localhost:3000/jokes/26/11`;
    }

    if (isNaN(month) || month < 1 || month > 12){
        res =`Your input in the URL for month of birth is invalid
        URL: localhost:3000/jokes/:age/:birthMonth

        Sample URL should look like
        localhost:3000/jokes/26/11`;
    }

const chooseJoke = age < 18 ? jokes["childJokes"][month]: (age >=18 && age <70)?jokes["sarcasmJokes"][month]:jokes["oldJokes"][month];

const res =`<html>
<h4>Your Joke for today!!<h4>
<p>${chooseJoke}</p>
  </html>`
    
// const pickImage = jokes.find((joke)=>{
//     return joke === randomNum});

    response.send(res);
    
}); 
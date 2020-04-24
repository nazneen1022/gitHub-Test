// Creating a joke app server
const importExpress = require('express');

// import the data
const jokes = require('./jokes')

const min = 1;
const max = parseInt(Object.keys(jokes).length);

const app = importExpress(); // create a server

app.listen(3000, () => { console.log(`Listening to port 3000`) }); // listening to the port


app.get('/student/:name', (request, response) => {

})

// Validate Input Data
function validateInputData(UserAge,monthOfBirth) {

    if (isNaN(UserAge) || UserAge > 110 || UserAge < 3) {
        res = `Your input ion the URL for age is invalid
        URL: localhost:3000/jokes/:age/:birthMonth

        Sample URL should look like
        localhost:3000/jokes/26/11`;

    }

    if (isNaN(monthOfBirth) || monthOfBirth < 1 || monthOfBirth > 12) {
        res = `Your input in the URL for month of birth is invalid
        URL: localhost:3000/jokes/:age/:birthMonth

        Sample URL should look like
        localhost:3000/jokes/26/11`;
    }

}

//Format HTML format
function render(displayJoke){
    return `<html>
                <head>
                   <title>Joke App</title>
                   <h3>Your Joke for today!!<h3>
                </head>
                <body>
                   <p>${displayJoke}</p>
                </body>
             </html>`
}

// GET endpoint with arg1: route and arg2: request and response
app.get("/Jokes/:age/:birthMonth", (request, response) => {

    const age = parseInt(request.params.age);
    const birthMonth = parseInt(request.params.birthMonth);

    validateInputData(age, birthMonth);

    const chooseJoke = age < 18 ? jokes["childJokes"][birthMonth] : jokes["sarcasmJokes"][birthMonth];

    const res = render(chooseJoke);

    response.send(res);

}); 
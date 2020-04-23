// Joke app server
const importExpress = require('express');
const app = importExpress(); // create a server

app.listen(3000,()=>{console.log(`Listening to port 3000`)}); // listening to the port

// GET endpoint with arg1: route and arg2: request and response
app.get('/userName?&age&birthMonth',(request,response)=>{
    const paramAge = getUrlParam("age","age");
    response.send(`Age : 
    // <h5>${paramAge}</h5>
    // <h1>${request.params.birthMonth}<h1>`);

}); 
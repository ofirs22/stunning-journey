//by convention we start an express application by importing express, 
//it will return a function which we will place in the constant express
const express = require('express');

// a middleware that helps with cross origin resource sharing
const cors = require('cors');

//importing dotenv
const dotenv = require('dotenv');

//than create the cobstant app which will get the returned value from the express function
const app = express();

//this method let us read from the .env file
dotenv.config();

//using the middleware cors with app.use methods to
app.use(cors(/*can send options*/));

// the app constant now has access to all express methods and properties
//get is one of the methods (from the CRUD functions), we supply 2 arguments to that functions
//first argument is the path, and the second is a callback function that receives 2 arguments (sometimes 3)
//request (req) and response (res)
app.get('/', (req, res) => {
    console.log('working')
    res.status(200).send('Page is working')
});
// we define which port we are listening to, the .env file can hold all the the environment variables
const PORT = process.env.PORT || 3000;

//starts to listen on the given port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
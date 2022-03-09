//General Imports
const express = require("express");
const cors = require("cors");
const request = require("request");

//we are using express
const app = express();

//PORT the server will use
const PORT = process.env.PORT || 3001;


//URLs for categories
const URLgeneral = "https://opentdb.com/api.php?amount=10&category=9";
const URLmythology = "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple";


app.get('/', (req, res) => {
    res.json({ message: 'Hello from my Express Backed'})
})


app.get('/main', cors(), async(req, res) => {

})

//API call for mythology category
app.get('/main/mythology', (req, res) => {
    request(URLmythology, function(err, res, body){
        res.send(body);
    })
})

//API call for general category
app.get('/main/general', (req, res) => {
    request(URLgeneral), function(err, res, body){
        res.send(body);
    }
})



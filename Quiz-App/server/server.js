//General Imports
const express = require("express");
const cors = require("cors");
var request = require("request");
// const http = require("http");
// const https = require("https");
//we are using express
const app = express();

//PORT the server will use
const PORT = process.env.PORT || 3001;


//URLs for categories
const URLgeneral = "https://opentdb.com/api.php?amount=10&category=9"
const URLmythology = "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple"


app.get("/", (req, res) => {
    res.json({ message: 'Hello from my Express Backed'})
})


// app.get('/main', (req, res) => {

// })

//API call for mythology category
// app.get("/mythology", (req, res) => {
//     request(URLmythology, function(err, res, body){
//         res.send(body);
//     })
// })

//API call for general category
app.get("/general", (req, res) => {
    request("https://opentdb.com/api.php?amount=10&category=9"), function(err, res, body){
        var data = JSON.parse(body)
        res.send(data);
    }
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})


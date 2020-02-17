/* eslint-disable */
var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
let contacts = require('../fixtures/data')

app.use(cors())
app.use(bodyParser.json())

app.get('/list', (req, res) => {
    setTimeout(() => {
        res.send(contacts())
    }, 2000)
})

app.get('/id/:id', (req, res) => {
    setTimeout(() => {
        res.send(contacts(req.params.id))
    }, 2000)
})

var PORT = process.env.PORT || 3004
app.listen(PORT, function() {
    console.log('Dev Express server running at localhost:' + PORT)
})

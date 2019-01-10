const express = require('express')
const fs = require("fs")
const path = require('path')

// Create Express App
const app = express()
app.use(express.static('public'))

//
app.get('/', function(req, res) {
    console.log(path.join(__dirname, 'index.html'))
    res.sendFile(path.join(__dirname, 'index.html'));
})

var server = app.listen(process.env.PORT || 5000, function() {console.log('********************** Server listening on port %s *', server.address().port);})

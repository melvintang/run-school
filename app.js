// import express
var express = require('express')
// import bodyParser object
var bodyParser = require('body-parser')

// instantiating the express server
var app = express()
var port = 4000

// set all the routes
var teachers_routes = require('./routes/teachers')
var students_routes = require('./routes/students')

// capture all requests, let it filtered by body-parse package so as to be json objects
app.use(bodyParser.urlencoded({
  extended: false
}))

// the view engine for express is ejs. HENCE, res.render(index) => index.ejs inside VIEWS FOLDER
app.set('view engine', 'ejs')

// add middleware to handle all static routes
app.use('/teachers', teachers_routes)
// add middleware to handle all movie routes
app.use('/students', students_routes)


// listening to the opened port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')

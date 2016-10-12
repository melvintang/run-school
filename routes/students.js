var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')


// READ ROUTES

// All the GET requests
router.get('/', function (req, res) {
  // all students view under INDEX.EJS
  res.render('students/index')
}).get('/new', function (req, res) {
  // NEW route under NEW.EJS
  res.render('students/new')
}).get('/:id', function (req, res) {
  res.send('student\'s ' + req.params.id + ' details')
}).get('/:id/edit', function (req, res) {
  res.send('edit student\'s ' + req.params.id + ' details')
})

// the only POST request
router.post('/', function (req, res) {
  res.send(req.body)
})

// only PUT request
router.put('/:id', function (req, res) {
  res.send('edit student' + req.params.id)
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete student' + req.params.id)
})

module.exports = router

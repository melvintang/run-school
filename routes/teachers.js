var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')


// READ ROUTES

// All the GET requests
router.get('/', function (req, res) {
  // all teachers view under INDEX.EJS
  res.render('teachers/index')
}).get('/new', function (req, res) {
  // NEW route under NEW.EJS
  res.render('teachers/new')
}).get('/:id', function (req, res) {
  res.send('teacher\'s ' + req.params.id + ' details')
}).get('/:id/edit', function (req, res) {
  res.send('edit teacher\'s ' + req.params.id + ' details')
})

// the only POST request
router.post('/', function (req, res) {
  res.send(req.body)
})

// only PUT request
router.put('/:id', function (req, res) {
  res.send('edit teacher' + req.params.id)
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete teacher' + req.params.id)
})

module.exports = router

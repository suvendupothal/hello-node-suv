var express = require('express')
var app = express()

// The code below will display 'Hello Node!'
app.get('/', function (req, res) {
  res.send('Hello Node!')
})

var port = process.env.PORT || '3000';

app.listen(port, function () {
  console.log('App listening on port 3000')
})

module.exports = app
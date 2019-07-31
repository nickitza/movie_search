var express = require('express')
var request = require("request")
var app = express()
app.set("view engine", "ejs")

app.get('/', function(req, res){
  res.render('search')
})

app.get('/results', function(req, res){
  var query = req.query.search
  var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query
  request(url, function(err, response, body){
    if(!err && response.statusCode === 200){
      //body is a string, data can't be accessed or manipulated
      var data = JSON.parse(body) 
      //JSON.parse will turn the string into an object that can be accessed
      res.render("results", {data: data})
      //{data: data} is how you pass variables to your .ejs file
    }
  })
})
app.listen(3000, function(){ console.log("***Movie app started")})
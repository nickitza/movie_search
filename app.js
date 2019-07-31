var express = require('express')
var request = require("request")
var app = express()
app.set("view engine", "ejs")

app.get('/', function(req, res){
  res.render('search')
})

app.get('/results', function(req, res){
  request("http://www.omdbapi.com/?apikey=thewdb&s=utah", function(err, response, body){
    if(!err && response.statusCode === 200){
      //body is a string, data can't be accessed or manipulated
      var data = JSON.parse(body) 
      res.render("results", {data: data})
    }
  })
})
app.listen(3000, function(){ console.log("***Movie app started")})
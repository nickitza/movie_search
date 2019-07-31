var express = require('express')
var request = require("request")
var app = express()

app.get('/results', function(req, res){
  request("http://www.omdbapi.com/?apikey=thewdb&s=star", function(err, response, body){
    if(!err && response.statusCode === 200){
      //body is a string, data can't be accessed or manipulated
      var results = JSON.parse(body) 
      res.send(results["Search"][0]["Title"])
    }
  })
})
app.listen(3000, function(){ console.log("***Movie app started")})
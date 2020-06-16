const express = require("express");
const routes = express.Router();
const teachers = require('./controllers/teachers')

routes.get('/', teachers.index)

routes.get('/teachers', function(req,res){
  return res.render("teachers/index")
})

routes.get('/teachers/create', teachers.create)

routes.get('/students', function(req,res){
  return res.send("students")
})

module.exports = routes;
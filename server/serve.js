const express = require("express");
const nunjucks = require("nunjucks");
const routes = require('./routes')

const server = express();


server.use(express.static("../views/public"));
server.use(routes);
server.set("view engine", "njk");


nunjucks.configure("../views",{
  express: server,
  autoescape:false,
  noCache:true
});

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(3333, function(){
  console.log("server is running");
});
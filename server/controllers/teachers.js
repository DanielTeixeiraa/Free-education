const teachers = require('../models/teachers')
module.exports = {
  index(req,res){
    teachers.all(function(teachers){
      return res.render("teachers/index", {teachers})
    })
  },

  create(req,res){
    return res.render('teachers/create')
  }

}
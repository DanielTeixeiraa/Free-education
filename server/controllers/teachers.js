const teachers = require('../models/teachers')

module.exports = {
  index(req,res){
    teachers.all(function(teachers){
      return res.render("teachers/index", {teachers})
    })
  },

  create(req, res) {
    return res.render("teachers/create");
  },

  post(req,res){
    console.log(req.body)
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Algum campos vazio");
      }
    }

    teachers.create(req.body, function(teacher){
    return res.redirect(`/teacher/${teacher.id}`)
    })
  }
}
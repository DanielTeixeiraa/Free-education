const db = require('../database/db')
module.exports = {
  all(callback){
    db.query(`SELECT * FROM teachers`, (err,result) =>{
      if (err) {
        return res.send("Database Error!");
      }
      callback(results.rows);
    })
  }
}
const { date } = require('../controllers/utils')
const db = require('../database/db')

module.exports = {
  all(callback){
    db.query(`SELECT * FROM teachers`, (err,results) =>{
      if (err) {
        return res.send("Database Error!");
      }
      callback(results.rows);
    })
  },
  create(data,callback){
    const query = `
    INSERT INTO teachers (
      name,
      age,
      formation,
      type,
      services,
      create_at,
      avatar_url
    ) VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id
    `;
    const values = [
      data.name,
      date(data.age).iso,
      data.formation,
      data.type,
      data.services,
      date(Date.now()).iso,
      data.avatar_url,
    ];

    console.log(values)

    db.query(query,values, function(err,results){
      if (err) {
        return
      }
      callback(results.rows[0])
    })
  }
}
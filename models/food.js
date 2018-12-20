var db = require('../db/config');

var food = {};

food.getAll = function(req, res, next){
  db.manyOrNone("SELECT * FROM food;")
    .then(function(result){
      console.log("res" , result)
      res.locals.food = result;
      next()
    })
    .catch(function(error){
      console.log(error);
      next()
    })
}

food.find = function (req, res, next) {
  db.one("SELECT * FROM food WHERE id=$2;", [req.params.id])
    .then(function (result) {
      res.locals.food = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}

module.exports = food;
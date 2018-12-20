var db = require('../db/config');
var user = {};

// get all users by thier favorit food 
user.getAll = function(req, res, next){
  db.manyOrNone('SELECT  users.id, users.name AS user_name, users.image, food.name as food FROM users INNER JOIN food ON users.foods_id = food.id;')
    .then(function(result){
      console.log("\n\n\n\n***** get all " , result);
      res.locals.user = result;
     
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

user.find = function (req, res, next) {
  console.log("editing user" , req.params.id)
  db.one('SELECT * FROM users WHERE id = $1;', [req.params.id])
    .then(function (result) {
      console.log("editing user" , result )
      res.locals.user = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}

user.create = function (req, res, next) {
  console.log(req.body);
  db.one('INSERT INTO users (name, email, password, image, foods_id) VALUES ($1,$2,$3,$4,$5) RETURNING id;',
        [req.body.name, req.body.email , req.body.password, req.body.image , parseInt(req.body.foods_id)])
    .then(function (result) {
      console.log('***********');
      console.log(result);
      res.locals.userId = result.id;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}

user.update = function (req, res, next) {
  const { name, email, password, image, foods_id } = req.body;
  console.log(req.body, req.params)
  const userID = req.params.id;
  const sql = `UPDATE users SET email='${email}', name='${name}', password='${password}', image='${image}', foods_id=${foods_id} WHERE id = ${userID} RETURNING id;`;
  db.one(sql)
    .then(function (result) {
      res.locals.userId = result.id;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}

user.delete = function (req, res, next) {

  console.log("fufufu");
  db.none('DELETE FROM users WHERE id=$1;', [req.params.id])
    .then(function () {
      next();
    })
    .catch(function (error) {
      console.log("error" ,error);
      next();
    })
}



user.findByFood = function (req, res, next) {

  db.manyOrNone("SELECT * FROM users WHERE foods_id=$1;", [req.params.id])
    .then(function (result) {
      console.log("result", result);
      res.locals.users = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}

module.exports = user;
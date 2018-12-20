var express = require('express');
var router = express.Router();

var user = require('../models/user');
var food = require('../models/food');

router.get('/new', food.getAll, renderNew);

router.get('/show', user.getAll, renderShow);

router.get('/:id', user.find, renderShow);
router.get('/', user.getAll, renderIndex);
router.get('/', user.create, redirectShow);

router.put('/', user.update, redirectShow);

router.get('/:id/edit', user.find, food.getAll, renderEdit);


router.post('/', user.create, redirectShow);
router.put('/:id', user.update, redirectShow);
router.delete('/:id', user.delete, redirectIndex);

function renderIndex(req, res){
  console.log(res.locals.user);
  var mustacheVariables = {
    user: res.locals.user
  }
  console.log(mustacheVariables);
  res.render('./user/index', mustacheVariables);
}


/*router.delete('/delete-data', function (req, res) {
  res.send('DELETE Request');
});*/


function renderShow(req, res) {
  var mustacheVariables = {
    user: res.locals.user
  }
  res.render('./user/show', mustacheVariables);
}

function renderNew(req, res) {
  var mustacheVariables = {
    food: res.locals.food
  }
  res.render('./user/new', mustacheVariables);
}

function renderEdit(req, res) {

  var mustacheVariables = {
    user: res.locals.user,
    food: res.locals.food
  }
  res.render('./user/edit', mustacheVariables);
}

function redirectIndex(req,res){
  res.redirect('/user');
}

function redirectShow(req, res) {
  res.redirect('/user');
}

module.exports = router;
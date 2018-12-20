var express = require('express');
var router = express.Router();

var food = require('../models/food');
var user = require('../models/user');

router.get('/', food.getAll, renderIndex);
router.get('/:id', food.find, user.findByFood, renderShow);
router.put('/', food.find, redirectShow);

function renderIndex(req, res){
  console.log( res.locals.food)
  var mustacheVariables = {
    food: res.locals.food
  }
  res.render('./food/index', mustacheVariables);
}

function renderShow(req,res){
  console.log('\n\n\n renderShow' , res.locals.users)
  var mustacheVariables = {
    users: res.locals.users
  }
  res.render('./food/show', mustacheVariables);
}

function redirectShow(req,res){
  res.redirect('/user_id');
}

module.exports = router;
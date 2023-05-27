const express = require('express');
const { render } = require('timeago.js');
const router = express.Router();
const pool = require('../database');
const passport = require('passport');

// router.post('/',passport.authenticate('local.signup',{
//     successRedirect: '/profile',
//     failureRedirect: '/login/',
//     failureFlash: true
// }));

// router.post('/',(req,res,next) =>{
// passport.authenticate('local.signin',{
//     successRedirect: '/Principal',
//     failureRedirect: '/login/',
//     failureFlash: true,
// })(req,res,next)
// });
const valid = true;

router.post('/',(req,res,next) =>{
  passport.authenticate('local.signin',{
      successRedirect: '/Principal',
      failureRedirect: ('/login/err'),
      failureFlash: true,
  })(req,res,next)
  });

router.get('/', (req, res) => {

    res.render('Paginas/login');
});

router.get('/err', (req, res) => {    
    res.render('Paginas/login',{valid});
});
module.exports = router;
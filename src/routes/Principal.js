const express = require('express');
const { render } = require('timeago.js');
const router = express.Router();

router.get('/Principal',(req,res)=>{
    res.render('Paginas/Principal')
   });

router.get('/Modificaciones/Personas',(req,res)=>{
    res.render('Paginas/Altas/Personas')
});
router.get('/Formatos/3evaluacion',(req,res)=>{
    res.render('Paginas/Docs/3evaluacion')
});

router.get('/AcercaDe',(req,res)=>{
    res.render('Paginas/AcercaDe')
});


module.exports = router;
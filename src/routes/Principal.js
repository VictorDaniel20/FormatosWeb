const express = require('express');
const { render } = require('timeago.js');
const router = express.Router();
const pool = require('../database');


router.post('/Principal', (req, res) => {
    res.render('Paginas/Principal',)
});

router.get('/Principal', (req, res) => {

    res.render('Paginas/Principal',)
});

router.get('/Modificaciones/Personas', (req, res) => {
    res.render('Paginas/Altas/Personas')
});
router.get('/Formatos/3evaluacion', async (req, res) => {
    res.render('Paginas/Docs/3Evaluacion');
});
router.get('/Formatos/1Evaluacion', async (req, res) => {
    res.render('Paginas/Docs/1Evaluacion');
});
router.get('/Formatos/2Evaluacion', async (req, res) => {
    res.render('Paginas/Docs/2Evaluacion');
});
router.get('/Formatos/4Evaluacion', async (req, res) => {
    res.render('Paginas/Docs/4Evaluacion');
});
router.get('/Formatos/5Evaluacion', async (req, res) => {
    res.render('Paginas/Docs/5Evaluacion');
});
router.get('/Formatos/6Evaluacion', async (req, res) => {
    res.render('Paginas/Docs/6Evaluacion');
});
router.get('/AcercaDe', (req, res) => {
    res.render('Paginas/AcercaDe')
});


module.exports = router;
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
    const userData = await pool.query('select nombres , primerApellido ,segundoApellido  from persona where id_persona =?', 87);
    const datos = userData[0];
    res.render('Paginas/Docs/3evaluacion', { datos });
});

router.get('/AcercaDe', (req, res) => {
    res.render('Paginas/AcercaDe')
});


module.exports = router;
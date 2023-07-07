const express = require('express');
const { render } = require('timeago.js');
const router = express.Router();
const pool = require('../database');


router.post('/Formatos/Principal', (req, res) => {
    res.render('Paginas/Principal',)
});

router.get('/Formatos/Principal', (req, res) => {

    res.render('Paginas/Principal',)
});

router.get('/Formatos/Modificaciones/Personas', (req, res) => {
    res.render('Paginas/Altas/Personas')
});
router.get('/Formatos/3evaluacion', async (req, res) => {
    const { id_inv } = req.user;
    const lal = await pool.query('SELECT persona.id_persona, persona.nombres, persona.primerApellido, persona.segundoApellido FROM persona WHERE persona.id_persona IN ( SELECT aspirante.id_persona FROM aspirante WHERE id_aspirante IN ( SELECT doctorado.id_doctorado FROM doctorado WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?))', [id_inv, id_inv, id_inv, id_inv]);
    const tesis = await pool.query('SELECT doctorado.id_doctorado, protocolo.nombre, aspirante.id_persona FROM doctorado INNER JOIN protocolo ON doctorado.id_protocolo = protocolo.id_protocolo INNER JOIN aspirante ON doctorado.id_doctorado = aspirante.id_aspirante WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?;', [id_inv, id_inv, id_inv, id_inv]);
    res.render('Paginas/Docs/3Evaluacion', { lal, tesis });
});
router.get('/Formatos/1Evaluacion', async (req, res) => {
    const { id_inv } = req.user;
    const lal = await pool.query('SELECT persona.id_persona, persona.nombres, persona.primerApellido, persona.segundoApellido FROM persona WHERE persona.id_persona IN ( SELECT aspirante.id_persona FROM aspirante WHERE id_aspirante IN ( SELECT doctorado.id_doctorado FROM doctorado WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?))', [id_inv, id_inv, id_inv, id_inv]);
    const tesis = await pool.query('SELECT doctorado.id_doctorado, protocolo.nombre, aspirante.id_persona FROM doctorado INNER JOIN protocolo ON doctorado.id_protocolo = protocolo.id_protocolo INNER JOIN aspirante ON doctorado.id_doctorado = aspirante.id_aspirante WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?;', [id_inv, id_inv, id_inv, id_inv]);
    res.render('Paginas/Docs/1Evaluacion', { lal, tesis });
});
router.get('/Formatos/2Evaluacion', async (req, res) => {
    const { id_inv } = req.user;
    const lal = await pool.query('SELECT persona.id_persona, persona.nombres, persona.primerApellido, persona.segundoApellido FROM persona WHERE persona.id_persona IN ( SELECT aspirante.id_persona FROM aspirante WHERE id_aspirante IN ( SELECT doctorado.id_doctorado FROM doctorado WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?))', [id_inv, id_inv, id_inv, id_inv]);
    const tesis = await pool.query('SELECT doctorado.id_doctorado, protocolo.nombre, aspirante.id_persona FROM doctorado INNER JOIN protocolo ON doctorado.id_protocolo = protocolo.id_protocolo INNER JOIN aspirante ON doctorado.id_doctorado = aspirante.id_aspirante WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?;', [id_inv, id_inv, id_inv, id_inv]);
    res.render('Paginas/Docs/2Evaluacion', { lal, tesis });
});
router.get('/Formatos/4Evaluacion', async (req, res) => {
    const { id_inv } = req.user;
    const lal = await pool.query('SELECT persona.id_persona, persona.nombres, persona.primerApellido, persona.segundoApellido FROM persona WHERE persona.id_persona IN ( SELECT aspirante.id_persona FROM aspirante WHERE id_aspirante IN ( SELECT doctorado.id_doctorado FROM doctorado WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?))', [id_inv, id_inv, id_inv, id_inv]);
    const tesis = await pool.query('SELECT doctorado.id_doctorado, protocolo.nombre, aspirante.id_persona FROM doctorado INNER JOIN protocolo ON doctorado.id_protocolo = protocolo.id_protocolo INNER JOIN aspirante ON doctorado.id_doctorado = aspirante.id_aspirante WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?;', [id_inv, id_inv, id_inv, id_inv]);
    res.render('Paginas/Docs/4Evaluacion', { lal, tesis });
});
router.get('/Formatos/5Evaluacion', async (req, res) => {
    const { id_inv } = req.user;
    const lal = await pool.query('SELECT persona.id_persona, persona.nombres, persona.primerApellido, persona.segundoApellido FROM persona WHERE persona.id_persona IN ( SELECT aspirante.id_persona FROM aspirante WHERE id_aspirante IN ( SELECT doctorado.id_doctorado FROM doctorado WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?))', [id_inv, id_inv, id_inv, id_inv]);
    const tesis = await pool.query('SELECT doctorado.id_doctorado, protocolo.nombre, aspirante.id_persona FROM doctorado INNER JOIN protocolo ON doctorado.id_protocolo = protocolo.id_protocolo INNER JOIN aspirante ON doctorado.id_doctorado = aspirante.id_aspirante WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?;', [id_inv, id_inv, id_inv, id_inv]);
    res.render('Paginas/Docs/5Evaluacion', { lal, tesis });
});
router.get('/Formatos/6Evaluacion', async (req, res) => {
    const { id_inv } = req.user;
    const lal = await pool.query('SELECT persona.id_persona, persona.nombres, persona.primerApellido, persona.segundoApellido FROM persona WHERE persona.id_persona IN ( SELECT aspirante.id_persona FROM aspirante WHERE id_aspirante IN ( SELECT doctorado.id_doctorado FROM doctorado WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?))', [id_inv, id_inv, id_inv, id_inv]);
    const tesis = await pool.query('SELECT doctorado.id_doctorado, protocolo.nombre, aspirante.id_persona FROM doctorado INNER JOIN protocolo ON doctorado.id_protocolo = protocolo.id_protocolo INNER JOIN aspirante ON doctorado.id_doctorado = aspirante.id_aspirante WHERE doctorado.id_asesor = ? OR doctorado.id_coodirector = ? OR doctorado.id_tutor1 = ? OR doctorado.id_tutor2 = ?;', [id_inv, id_inv, id_inv, id_inv]);
    res.render('Paginas/Docs/6Evaluacion', { lal, tesis });
});
router.get('/Formatos/AcercaDe', (req, res) => {
    res.render('Paginas/AcercaDe')
});


module.exports = router;
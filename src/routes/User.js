const express = require('express');
const router = express.Router();

router.get('/Ajustes',(req,res)=>{
    res.render('Paginas/Ajustes');
});
router.get('/ModificarUsuario',(req,res)=>{
    res.render('Paginas/cambioContra');
});
router.post('/ModificarUsuario',(req,res)=>{
    res.render('Paginas/cambioContra');
});
module.exports = router;
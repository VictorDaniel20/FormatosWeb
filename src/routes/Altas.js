const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/Formatos/Guardar', async (req,res)=>{
    req.flash('success','Guardado satisfactoriamente');
    res.render('Paginas/Altas/DatosP');
})

router.post('/Formatos/Guardar', async (req,res)=>{
    console.log(req.body);
    const firmas = "null"
    const id_persona="";
    const person =  {usuario,nombre,pApellido,sApellido,fechaNac,genero,edoCivil,nacionalidad,rfc,email,firma,pais,estado,Municipio,colonia,noInterior,noExterior,calle,cp,curp,telcel,tel} = req.body;
    const newPerson = {
        id_persona,nombre,pApellido,sApellido,fechaNac,genero,pais,estado,Municipio,colonia,calle,noExterior,noInterior,cp,edoCivil,email,tel,telcel,curp,nacionalidad,firma,rfc};
        console.log(email);
        await pool.query(' INSERT INTO persona VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[,nombre,pApellido,sApellido,fechaNac,genero,pais,estado,Municipio,colonia,calle,noExterior,noInterior,cp,edoCivil,email,tel,telcel,curp,nacionalidad,firma,rfc]);
        res.redirect('/Formatos/Modificaciones/Guardar');
});


module.exports = router;
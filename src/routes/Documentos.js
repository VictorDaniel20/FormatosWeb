const express = require('express');
const router = express.Router();

const pool = require('../database');


router.post('/Guardar', async (req,res)=>{
    console.log(req.body);
    const firmas = "null"
    var id=200;
    const {usuario,nombre,pApellido,sApellido,fechaNac,genero,edoCivil,nacionalidad,rfc,email
        ,firma,pais,estado,municipio,colonia,noInterior,noExterior,calle,cp,curp,telcel,tel} = req.body;
    const newPerson = {
        id,nombre,pApellido,sApellido,fechaNac,genero,pais,estado,municipio,colonia,calle,noExterior,noInterior,cp,edoCivil,email,tel,telcel,curp,nacionalidad,firmas,rfc};
        console.log(email);
        await pool.query(' INSERT INTO persona VALUES(?)',[newPerson]);

        if(usuario === 'Alumno'){
            res.send('Eres Alumno');
        }
        if(usuario === 'Coordinador'){
            res.send('Eres Coordinador');
        }
        if(usuario === 'Profesor'){
            res.send('Eres Profesor');
        }
});


module.exports = router;
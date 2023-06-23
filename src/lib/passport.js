const passport = require('passport');
const local = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('../lib/helpers');


passport.use('local.signin', new local({
    usernameField: 'Correo',
    passwordField: 'contraseña',
    passReqToCallback:true
},async (req,username,password,done) => {
    const rows = await pool.query('select * from investigador where email_institu = ?',username);
    const valid =  {
        falso: "false"
    }
    if(rows.length > 0){
        const usP = await pool.query('select * from usuario where id_investigador = ? ',rows[0].id_investigador);
        const persona = await pool.query('select * from persona where id_persona  = ? ',rows[0].id_persona);
        const {id_persona, nombres,primerApellido,segundoApellido,fechaNac,genero } = persona[0];
        const id_inv = rows[0].id_investigador;
        const usuarioData ={
            id_persona,
            id_inv,
            nombres,
            primerApellido,
            segundoApellido,
            fechaNac,
            genero,
            username
        }
        const user = usuarioData;
        if(password === usP[0].contrasenia){
            const valid =  {
                verdad: "cierto"
            }
            done(null,user,{valid});    
        }else{
            done(null,false,{valid});
        }
    }
    else{
        done(null,false,{valid});
    }
}));
// passport.use('local.signup', new local({
//     usernameField: 'Correo',
//     passwordField: 'contraseña',
//     passReqToCallback:true
// },async (req,username,password,done)=>{
//     // const {datos Usuario} = req.body
//     const newUser ={
//         username,
//         password,
//         id_investigador
//     }
//     newUser.password = await helpers.encryptPassword(password);
//     const result = await pool.query('update usuario set contrasenia = ? where id_investigador = ?',[newUser],id_investigador);
//     newUser.id = result.insertId;
//     return done(null,newUser);

//     }));
passport.serializeUser((usr,done) => {
    done(null,usr);
});
 passport.deserializeUser(async (usr,done) => {
    done(null,usr);
 });
// passport.serializeUser((usr,done)=>{

// });


const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path')

//inicializamos
const app = express();


//configuraciones
app.set('port',process.env.PORT || 3000 );
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs',hbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'Paginas'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales
app.use((req,res,next) =>{
next();
});

//rutas
app.use(require('./routes/Principal'));
app.use('/login',require('./routes/login'));
app.use('/aut',require('./routes/autenticacion'));
app.use('/Principal',require('./routes/Principal'));
app.use('/Modificaciones/Personas',require('./routes/Principal'));
app.use('/Formatos/3evaluacion',require('./routes/Principal'));
app.use('AcercaDe',require('./routes/Principal'));
// public
app.use(express.static(path.join(__dirname,'public')));


//empezar el servidor
app.listen(app.get('port'),() =>{
    console.log('servidor en el puerto',app.get('port'));
});

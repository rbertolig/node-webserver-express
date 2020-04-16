//requires
//importar libreria del paquete EXPRESS
const express = require('express');
const app = express();

//importar liberias del paquete HBS ( handlebars)
const hbs = require('hbs');

//importar los helpers
require('./hbs/helpers');

//obterner puerto que nos asigne el servidor en Heroku
//process.env.PORT es una variable del entorno que solo funcionara cuando suba la app al servidor
// por lo anterior se usa || 3000 por si no existe asigne 3000 , muy util para que
//funcione local por el puerto 3000
const port = process.env.PORT || 3000;


// especificar el contenido default a servir con 'app.use()'
//aqui se utiliza 'express' para facilidad de programacion
app.use(express.static(__dirname + '/public'));

//declarar ubicacion de 'parciales de HBS'
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});

//habilitar Express 'HBS Engine' ( para renderizar contenido hbs instalado : npm i hbs )
app.set('view engine', 'hbs');

// una forma de servir contenido es via app.get() y renderizar contenido con res.render()
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'esto es del curso de node',
    });

});
app.get('/about', (req, res) => {
    res.render('about', {});

});

//Especificar el puerto en que escucha el servidor
app.listen(port, () => {
    console.log(`Escuchando en puerto http ${ port }`);
});
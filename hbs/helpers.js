//helpers
//importar liberias del paquete HBS ( handlebars)
const hbs = require('hbs');

// este es para tener en 'getAnio' el anio actual
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});

//este es para capitalizar la primera letra de cada palabra en un texto enviado al helper
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});
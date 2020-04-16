// requires
// el paquete http es nativo de Node, no se require instaar paquete adicional
const http = require('http');

// crear server
http.createServer((req, res) => {
        res.write('Hola Mundo') // contenido que entregara
        res.end() // hay que poner 'rest.end() porque sino no cierra el proceso de res.write()
    })
    .listen(8080); // puerto en que ecuchara el servidor

console.log('Escuchando el puerto 8080');
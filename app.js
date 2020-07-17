/**
 * 
 */
// tipo require de un proyecto propio de node, ya existe la libreria y solo se define
//const fs = require('fs');

//tipo require no es una libreria propia de node, es un paque que se instala, no nativo de node, hecho por otras personas
//const fs = require('express');

// tipo require de archivos que nosotros creamos en el proyecto
//const fs = require('./fs');

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
const argv2 = require('./config/yargs').argv2;
var colors = require('colors');
//let base = '5';
/* let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]; */

let comando = argv2._[0];
switch (comando) {

    case 'listar':
        listarTabla(argv2.base, argv2.limite)
        break;

    case 'crear':
        crearArchivo(argv2.base, argv2.limite)
            .then(archivo => console.log(`Archivo creado: ` + colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando desconocido');
}
//let base = process.argv[2].split('=')[1];
/* let data = '';
for (let i = 1; i <= 10; i++) {
    data += (`${base} * ${i} = ${base * i}\n`);
}

fs.writeFile(`tablas/tabla-multiplicar-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado');
}); */
/* 
crearArchivo(base)
.then(archivo => console.log(`Archivo creado: ${archivo}`))
.catch(e => console.log(e)); */
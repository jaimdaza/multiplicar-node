/**
 * 
 */
// tipo require de un proyecto propio de node, ya existe la libreria y solo se define
const fs = require('fs');
var colors = require('colors');

//tipo require no es una libreria propia de node, es un paque que se instala, no nativo de node, hecho por otras personas
//const fs = require('express');

// tipo require de archivos que nosotros creamos en el proyecto
//const fs = require('./fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('el valor base no es numero'.red);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-multiplicar-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-multiplicar-${base}-hasta-${limite}.txt`)
        });
    });
};

let listarTabla = (base, limite = 10) => {
    console.log('==========================='.green);
    console.log(`========Tabla de ${base}======`.green);
    console.log('==========================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}
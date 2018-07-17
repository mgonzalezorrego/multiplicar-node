const argv = require('./config/yargs').argv;
const colors = require('colors');
/* const argv = require('yargs')
        .command('listar','Imprime en consola la tabla de multiplicar',{
            base: {
                demand: true,
                alias: 'b'
            },
            limite:{
                alias: 'l',
                default: 10
            }
        })
        
        .command('crear','Genera un archivo con la tabla de multiplicar',{
            base: {
                demand: true,
                alias: 'b'
            },
            limite:{
                alias: 'l',
                default: 10
            }
        })
        .help()
        .argv; */

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch(comando){
    case 'listar':
       listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//const fs = require('express');
//const fs = require('./');

//let base = '7';
//console.log(multiplicar);

//console.log(process.argv);
//let argv2 = process.argv;

//console.log('Limite',argv.limite);
//console.log(argv2);

//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(base[1]);
//enviar parametros por la linea de comandos asi : node app --base=12
// iniciar la aplicacion con el siguiente comando :  npm init
//


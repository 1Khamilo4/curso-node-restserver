const express = require("express");
const cors = require('cors');/** 'cors' es un paquete que nos permite proteger nuestro servidor de una manera superficial  */

class Server{/**En vez de hacer todo el web server o el rest server en un archivo sin mas, lo que se va ha hacer es crear una clase 'Server'
que va ha controlar todo lo que son configuraciones principales de la pagina  */

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        /**Los  'Middlewares' son funciones o metodos que siempre se van a ejecutar y van añadirle mas funcionalidad a mi aplicacion web*/
        this.middlewares()

        //Rutas de mi aplicacion
        this.routes();

        //listen
        this.listen();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura y Parseo del Body
        this.app.use(express.json());/**De esta manera cualquier informacion que me reciba el back-end ya sea con un 
        metodo POST, PUT o DELETE la va a seriaizar a un formato json  */
        //Directorio publico
        this.app.use(express.static('public'));/**El metodo '.use()' es la palabra clave para utilizar middlewares */
    }

    routes(){

        this.app.use(this.usuariosPath,require('../routes/usuarios.js'));/**Se utiliza un middleware para poder acceder a las rutas que estan en otro archivo, 
        el primer parametro es como una 'url' o 'path' por defecto que dejo para poder acceder a los end-point's y el segundo parametro es la ruta para poder 
        acceder al archivo que contiene las url's o las rutas ya configuradas (los controladores de cada url) utilizando siempre el 'require('/path_archivo')' */

        /* Lo comento por que voy a separar estas rutas en un archivo 
        dedicado a dichas rutas 

        this.app.get('/api',(req,res)=>{//Llevar data hacia el usuario 
            res.json({
                msg:'get API'
            })
        });

        this.app.put('/api',(req,res)=>{//Actualizar data 
            res.status(400).json({
                msg:'put API'
            })
        });

        this.app.post('/api',(req,res)=>{//Crear nueva data 
            res.status(201).json({
                msg:'post API'
            })
        });

        this.app.delete('/api',(req,res)=>{//Eliminar data  
            res.json({
                msg:'delete API'
            })
        });

        this.app.patch('/api',(req,res)=>{//Eliminar data 
            res.status(500).json({
                msg:'patch API'
            })
        });  */


    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`App listening in http://localhost:${this.port}`);
        })
    }
}

module.exports= Server;
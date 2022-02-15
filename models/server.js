//@ts-check
const express = require('express')
const cors = require('cors');
const router = require('../routes/users');
const { dbConnection } = require('../database/config');

class Server{
    
    app;
    port;
    userPaths;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.userPaths = '/api/usuarios';

        this.database();
        
        //Middlewares
        this.middlewares();
        
        //Routes
        this.routes();
    }
    async database (){
        await dbConnection();
    }

    middlewares(){
        //Cors
        this.app.use( cors() )

        this.app.use( express.json() )
        
        //Public folder
        this.app.use(express.static( "public" ))
        
    }

    routes(){
        this.app.use(this.userPaths, router )
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${ this.port }`);
        })
    }
}

module.exports = Server;
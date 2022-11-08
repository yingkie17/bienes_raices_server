    const express = require('express');
    const path = require('path');
    const token = process.env.bienesraicesapp_token;
    require('dotenv').config();
    //App de Express
    const app = express();


    //Node Server
    const server = require('http').createServer(app);
    module.exports.io = require('socket.io')(server);
    require('./sockets/socket.js');
    


    // Path Public
    const publicPath = path.resolve(__dirname, 'public');
    app.use(express.static(publicPath));


    server.listen(process.env.PORT, ( err ) => {

      if ( err ) throw new Error( err );
      console.log('Servidor Corriendo en puerto !!!!', process.env.PORT);
    });

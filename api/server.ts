'use strict';

// Framework express
const express = require('express');
const app = express();

// Request y parametros de conexion
const resquest = require('request');
const https = require('https');
const bodyParser = require('body-parser');
const cors = require('cors');

// Acceder a las claves https (/https_keys)
const fs = require('fs');

// CONFIGURAR APP
const PORT = process.env[1] || process.env.PORT || 8081;

app.set('port', PORT);
app.set('rest', resquest);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, UPDATE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    next();
});

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));
app.use(cors());

//      RUTAS
require("./src/routes")(app);

//  LANZAR SERVIDOR
https.createServer({
    key: fs.readFileSync('./api/https_keys/server.key'),
    cert: fs.readFileSync('./api/https_keys/server.cert')
}, app)
    .listen(PORT, function () {
        console.log("=> Servidor activo en el puerto: ", PORT);
    })
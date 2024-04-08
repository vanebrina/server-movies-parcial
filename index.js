// Importacin del franwork expres para realizar solicitud http
const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');
//bodyparser es un middleware de express
//que parsea el cuerpo de las solicitudes entrantes
//en formato JSON, multipartes y lo convierte en un objeto java Script
const bodyParser = require('body-parser');
const movieRoutes = require('./src/routes/movie_routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//poder accerder a leer eel archivo .env
require("dotenv").config();
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`);
    mongo_connect();
});

const mongo_connect = () => {
    try {
        mongoose
            .connect(process.env.DATABASE_CONNECTION_STRING)
            .then(() => {
                console.log("Connected to MongoDB");
            })
            .catch ((err) => {
                console.log("Connection error" + ' ' + err.message);
            });
    } catch (err) {
        console.log(err);
    };
};

//rutas
app.use('/api/v1/movies', movieRoutes)

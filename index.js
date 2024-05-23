const express = require('express');
const app = express();
const auteurRouter = require('./Routes/AuteurRoutes');
const livreRouter = require('./Routes/LivreRoutes');


app.use(express.json());
app.use('/auteurs', auteurRouter );
app.use('/livres', livreRouter)

module.exports = app;
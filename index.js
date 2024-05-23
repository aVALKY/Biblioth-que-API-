const express = require('express');
const app = express();
const auteurRouter = require('./Routes/AuteurRoutes');
const livreRouter = require('./Routes/LivreRoutes');
const emprunteurRouter = require('./Routes/EmprunteurRoutes')
const empruntRouter = require('./Routes/EmpruntRoutes')


app.use(express.json());
app.use('/auteurs', auteurRouter );
app.use('/livres', livreRouter)
app.use('/emprunteurs', emprunteurRouter)
app.use('/emprunts', empruntRouter)

module.exports = app;
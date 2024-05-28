const express = require('express');
const app = express();
const auteurRouter = require('./Routes/AuteurRoutes');
const livreRouter = require('./Routes/LivreRoutes');
const emprunteurRouter = require('./Routes/EmprunteurRoutes');
const empruntRouter = require('./Routes/EmpruntRoutes');
const AuthenticateRoutes = require('./Routes/AuthenticateRoutes');
const AuthenticateController = require('./Controllers/AuthenticateController');


app.use(express.json());


app.use('/auth', AuthenticateRoutes)
app.use('/auteurs',  AuthenticateController.authenticateToken, auteurRouter );
app.use('/livres', AuthenticateController.authenticateToken, livreRouter);
app.use('/emprunteurs', AuthenticateController.authenticateToken, emprunteurRouter);
app.use('/emprunts', AuthenticateController.authenticateToken, empruntRouter);


module.exports = app;
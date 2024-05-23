const express = require('express');
const app = express();
const AuteurRouter = require('./Routes/AuteurRoutes');

app.use(express.json());
app.use('/auteurs', AuteurRouter );

module.exports = app;
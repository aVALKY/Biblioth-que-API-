const express = require('express');
const LivreController = require('../Controllers/LivreController');
const router = express.Router();

router.get('/', (request, result) => LivreController.getAllLivre(request,result));
router.get('/:id',(request, result) => LivreController.getLivreByID(request, result));


module.exports = router;
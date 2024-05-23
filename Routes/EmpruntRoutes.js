const express = require('express');
const EmpruntController = require('../Controllers/EmpruntController');

const router = express.Router();

router.get('/', (request, result) => EmpruntController.getAllEmprunt(request,result));
router.get('/:id',(request, result) => EmpruntController.getEmpruntByID(request, result));


module.exports = router;


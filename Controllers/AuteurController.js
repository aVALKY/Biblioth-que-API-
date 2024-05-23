const AuteurService = require("../Services/AuteurService");

class AuteurController {
    async getAllAuteur(request, result){
        try {
            const auteurs = await AuteurService.getAllAuteur();
            result.json(auteurs)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des auteurs"});
        }
    }
}

module.exports = new AuteurController();
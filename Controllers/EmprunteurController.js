const EmprunteurService = require("../Services/EmprunteurService");

class EmprunteurController {
    async getAllEmprunteur(request, result){
        try {
            const emprunteurs = await EmprunteurService.getAllEmprunteur();
            result.json(emprunteurs)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des emprunteurs1"});
            console.log(error);
        }
    }

    async getEmprunteurByID(request, result){
        try {
            const emprunteur = await EmprunteurService.getEmprunteurByID(request.params.id);
            result.json(emprunteur)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des emprunteurs"});
        }
    }
}


module.exports = new EmprunteurController();
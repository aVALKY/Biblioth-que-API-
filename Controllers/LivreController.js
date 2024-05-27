const LivreService = require("../Services/LivreService");

class LivreController {
    async getAllLivre(request, result){
        try {
            const livres = await LivreService.getAllLivre();
            result.json(livres)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des livres"});
        }
    }

    async getLivreByID(request, result){
        try {
            const livre = await LivreService.getLivreByID(request.params.id);
            result.json(livre)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération du livre"});
        }
    }

    async getLivreByID(request, result){
        try {
            const livre = await LivreService.getLivreByID(request.params.id);
            result.json(livre)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des livres"});
        }
    }


    async removeLivre(request, result){
        try {
            await LivreService.removeLivre(request.params.id);
            result.json({message : "Le livre à bien été supprimé"});
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression du livre"})
        }
    }
}


module.exports = new LivreController();
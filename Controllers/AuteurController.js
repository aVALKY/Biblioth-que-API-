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

    async getAuteurByID(request, result){
        try {
            const auteur = await AuteurService.getAuteurByID(request.params.id);
            result.json(auteur)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de l'auteur"});
        }
    }

    async addAuteur(request, result){
        try{
            const auteur = await AuteurService.addAuteur(request.body);
            result.json(auteur);
        }catch(error){
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'insertion de l'auteur"})
        }
    }

        async removeAuteur(request, result){
        try {
            await AuteurService.removeAuteur(request.params.id);
            result.json({message : "L'auteur à bien été supprimé"});
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression de l'auteur"})
        }
    }

    async updateAuteur(request, result){
        try {
            const auteur = await AuteurService.updateAuteur(request.params.id, request.body);
            result.json(auteur);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification de l'auteur "})
        }
    }
}


module.exports = new AuteurController();
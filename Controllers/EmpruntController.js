const EmpruntService = require("../Services/EmpruntService");

class EmpruntController {
    async getAllEmprunt(request, result){
        try {
            const emprunts = await EmpruntService.getAllEmprunt();
            result.json(emprunts)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des emprunts"});
        }
    }

    async getEmpruntByID(request, result){
        try {
            const emprunt = await EmpruntService.getEmpruntByID(request.params.id);
            result.json(emprunt)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des emprunts"});
        }
    }

    async addEmprunt(request, result){
        try{
            const emprunt = await EmpruntService.addEmprunt(request.body);
            result.json(emprunt);
        }catch(error){
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'insertion de l'emprunt"})
        }
    }

    async removeEmprunt(request, result){
        try {
            await EmpruntService.removeEmprunt(request.params.id);
            result.json({message : "L'emprunt à bien été supprimé"});
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression de l'emprunt"})
        }
    }
}


module.exports = new EmpruntController();
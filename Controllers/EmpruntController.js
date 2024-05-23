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
}


module.exports = new EmpruntController();
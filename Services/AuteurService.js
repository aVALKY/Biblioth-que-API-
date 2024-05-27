const Auteur = require ("../Models/Auteur");

class AuteurService {
    async getAllAuteur() {
        return await Auteur.findAll();
    }
    
    async getAuteurByID(AuteurID){
        return await Auteur.findByPk(AuteurID)
    }

    async addAuteur(auteur){
        return await Auteur.create(auteur);
    }

    async removeAuteur(auteurID){
        return await Auteur.destroy({
            where : {CL_ID : auteurID}
        })
    }
}

module.exports = new AuteurService();
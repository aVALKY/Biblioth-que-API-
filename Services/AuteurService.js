const Auteur = require ("../Models/Auteur");

class AuteurService {
    async getAllAuteur() {
        return await Auteur.findAll();
    }
    
    async getAuteurByID(AuteurID){
        return await Auteur.findByPk(AuteurID)
    }
}

module.exports = new AuteurService();
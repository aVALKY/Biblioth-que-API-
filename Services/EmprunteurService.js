const Emprunteur = require("../Models/Emprunteur");

class EmprunteurService {
    async getAllEmprunteur(){
        return await Emprunteur.findAll();
    }

    async getEmprunteurByID(EmprunteurID){
        return await Emprunteur.findByPk(EmprunteurID)
    }

    async addEmprunteur(emprunteur){
        return await Emprunteur.create(emprunteur);
    }
}

module.exports = new EmprunteurService();
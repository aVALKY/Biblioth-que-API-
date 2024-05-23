const Emprunteur = require("../Models/Emprunteur");

class EmprunteurService {
    async getAllCompte(){
        return await Emprunteur.findAll();
    }

    async getCompteByID(EmprunteurID){
        return await Emprunteur.findByPk(EmprunteurID)
    }
}

module.exports = new EmprunteurService();
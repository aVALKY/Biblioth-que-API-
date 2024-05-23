const Emprunteur = require("../Models/Emprunteur");

class EmprunteurService {
    async getAllEmprunteur(){
        return await Emprunteur.findAll();
    }

    async getEmprunteurByID(EmprunteurID){
        return await Emprunteur.findByPk(EmprunteurID)
    }
}

module.exports = new EmprunteurService();
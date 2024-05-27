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

    async removeEmprunteur(emprunteurID){
        return await Emprunteur.destroy({
            where : {CL_ID : emprunteurID}
        })
    }
}

module.exports = new EmprunteurService();
const Emprunt = require("../Models/Emprunt");

class EmpruntService {
    async getAllCompte(){
        return await Emprunt.findAll();
    }

    async getCompteByID(EmpruntID){
        return await Emprunt.findByPk(EmpruntID)
    }
}

module.exports = new EmpruntService();
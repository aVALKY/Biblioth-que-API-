const Emprunt = require("../Models/Emprunt");

class EmpruntService {
    async getAllEmprunt(){
        return await Emprunt.findAll();
    }

    async getEmpruntByID(EmpruntID){
        return await Emprunt.findByPk(EmpruntID)
    }
}

module.exports = new EmpruntService();
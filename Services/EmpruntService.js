const Emprunt = require("../Models/Emprunt");

class EmpruntService {
    async getAllEmprunt(){
        return await Emprunt.findAll();
    }

    async getEmpruntByID(EmpruntID){
        return await Emprunt.findByPk(EmpruntID)
    }

    async addEmprunt(emprunt){
        return await Emprunt.create(emprunt);
    }
}

module.exports = new EmpruntService();
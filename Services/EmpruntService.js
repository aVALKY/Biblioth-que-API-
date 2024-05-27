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

    async removeEmprunt(empruntID){
        return await Emprunt.destroy({
            where : {CL_ID : empruntID}
        })
    }
}

module.exports = new EmpruntService();
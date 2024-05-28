const Livre = require("../Models/Livre");

class LivreService {
    async getAllLivre(){
        return await Livre.findAll();
    }

    async getLivreByID(LivreID){
        return await Livre.findByPk(LivreID)
    }

    async addLivre(livre){
        return await Livre.create(livre);
    }

    async removeLivre(livreID){
        return await Livre.destroy({
            where : {CL_ID : livreID}
        })
    }

    async updateLivre(livreID, livre){
        return await Livre.update(livre , {
            where : {CL_ID : livreID},
            individualHooks : true
        })
    }
}

module.exports = new LivreService();
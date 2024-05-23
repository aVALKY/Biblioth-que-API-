const Livre = require("../Models/Livre");

class LivreService {
    async getAllLivre(){
        return await Livre.findAll();
    }

    async getLivreByID(LivreID){
        return await Livre.findByPk(LivreID)
    }
}

module.exports = new LivreService();
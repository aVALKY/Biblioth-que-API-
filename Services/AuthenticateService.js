const jwt = require("jsonwebtoken");
const config = require('../Config/config.json');
const Emprunteur = require("../Models/Emprunteur");

class AuthenticateService{
    async register(emprunteurData){
        const emprunteur = await Emprunteur.create(emprunteurData);
        return this.generateToken(emprunteur);
    }

    async login (email, password){
        const emprunteur = await Emprunteur.findOne({ where : {Email_Emprunteur : email}})
        console.log(emprunteur);
        if (!emprunteur || !await emprunteur.validatePassword(password)){
            throw new Error("Email ou mdp n'est pas correct")
        }
        return this.generateToken(emprunteur);
    }

    generateToken(emprunteur){
        const payload = {
            id: emprunteur.id,
            email: emprunteur.Email_Emprunteur
        }
        return jwt.sign(payload,config.SECRET,{expiresIn: '1h'})
    }
}

module.exports = new AuthenticateService();
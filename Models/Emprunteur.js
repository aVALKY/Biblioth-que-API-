const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');
const bcrypt = require('bcrypt');
const EmpruntService = require('../Services/EmpruntService');

class Emprunteur extends Model {
    async validatePassword(password){
        return await bcrypt.compare(password, this.Password_Emprunteur);
    }
}

Emprunteur.init({
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    Nom_Emprunteur : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Prenom_Emprunteur : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Email_Emprunteur : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Telephone_Emprunteur : {
        type : DataTypes.STRING,
        allowNull : true
    },
    Password_Emprunteur : {
        type : DataTypes.STRING,
        allowNull : false
    },
    
}, {
    sequelize,
    modelName : "Emprunteur",
    tableName : "emprunteur",
    timestamps : false,
    hooks : {
        beforeCreate : async (emprunteur) => {
            emprunteur.Password_Emprunteur = await bcrypt.hash(emprunteur.Password_Emprunteur, 10); 
        },
        beforeUpdate : async (emprunteur) => {
            if (emprunteur.changed('Password_Emprunteur')) {
                emprunteur.Password_Emprunteur = await bcrypt.hash(emprunteur.Password_Emprunteur, 10)
            }
        }
    }
})

module.exports = Emprunteur;
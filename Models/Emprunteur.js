const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Emprunteur extends Model {

}

Emprunteur.init({
    Emprunteur_ID : {
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
    password_Emprunteur : {
        type : DataTypes.STRING,
        allowNull : false
    },
    
}, {
    sequelize,
    modelName : "Emprunteur",
    tableName : "Emprunteur",
    timestamps : false
})

module.exports = Emprunteur;
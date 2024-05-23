const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Emprunt extends Model {

}

Emprunt.init ({
    Emprunt_ID: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    Date_Emprunt : {
        type : DataTypes.DATE,
        allowNull : false
    },
    Livre_Emprunt : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    Emprunteur_Emprunt : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    Date_Emprunt_Rendu : {
        type : DataTypes.DATE,
        allowNull : true
    },
} , {
    sequelize,
    modelName : "Emprunt",
    tableName : "Emprunt",
    timestamps : false


})

module.exports = Emprunt; 
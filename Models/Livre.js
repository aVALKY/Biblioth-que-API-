const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Livre extends Model {

}

Livre.init({
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    Titre_Livre : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Date_Livre : {
        type : DataTypes.DATE,
        allowNull : true
    },
    Description_Livre : {
        type : DataTypes.STRING,
        allowNull : true
    },
    Auteur_Livre : {
        type : DataTypes.INTEGER,
        allowNull : true
    }
},{
    sequelize,
    modelName : "Livre",
    tableName : "Livre",
    timestamps : false
})

module.exports = Livre;
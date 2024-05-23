const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Auteur extends Model {

}

Auteur.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nom_Auteur: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Prenom_Auteur: {
    type: DataTypes.STRING,
    allowNull: false
    },
    Age_Auteur: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Nationalite_Auteur: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName : 'Auteur',
    tableName : 'Auteur',
    timestamps: false

})

module.exports = Auteur;
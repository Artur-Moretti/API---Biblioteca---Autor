const {Model, DataTypes} = require("sequelize");

const sequelize = require("../database");

class Autor extends Model{}

Autor.init({

    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    sobrenome: {
        type: DataTypes.STRING,
       
    },

    dataDeNascimento: {
        type: DataTypes.DATE,
       
    },

    genero: {
        type: DataTypes.STRING,
       
    }

}, {
    sequelize,
    modelName: "autor",
    timestamps: false
})

module.exports = Autor
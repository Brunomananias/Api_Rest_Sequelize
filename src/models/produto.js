const { DataTypes } = require('sequelize');
const database = require('../database/db');

const Produto = database.sequelize.define('produto', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },  
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    preco: DataTypes.DECIMAL,
    descricao: DataTypes.STRING
})

module.exports = {
    Produto
};
const { DataTypes } = require('sequelize');
const database = require('../database/db');

const Produtos = database.sequelize.define('Produtos', {
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
    quantidade: DataTypes.INTEGER,
    precoCusto: DataTypes.DECIMAL,
    precoRevenda: DataTypes.DECIMAL,
}, {
    tableName : 'produtos',
    timestamps: false
});

module.exports = {
    Produtos
};
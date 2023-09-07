const { DataTypes } = require('sequelize');
const database = require('../database/db');
const Clientes = require('./Clientes.js');

const Endereco = database.sequelize.define('endereco_cliente', {
    id_endereco:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    rua: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    numero: {
        type: DataTypes.INTEGER(),
        allowNull: true
    },
    complemento: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    bairro: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    cidade: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    
    cep: {
        type: DataTypes.STRING(12),
        allowNull: true
    },
    
    estado: {
        type: DataTypes.STRING(2),
        allowNull: true
    },
}, {
    tableName : 'endereco_cliente',
    timestamps: false
    
});

module.exports = {
    Endereco
};
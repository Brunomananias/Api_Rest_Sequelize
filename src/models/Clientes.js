const { DataTypes } = require('sequelize');
const database = require('../database/db');

const Clientes = database.sequelize.define('Clientes', {
    Id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    NomeCliente: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Cpf: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    Contato: {
        type: DataTypes.STRING(13),
        allowNull: true
    },
    Email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    Assinatura: {
        type: DataTypes.STRING(3),
        allowNull: true
    },
    Rua: {
        type: DataTypes.INTEGER(),
        allowNull: true
    },
    
    Numero: DataTypes.INTEGER,

    Cidade: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    Complemento: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    Cep: {
        type: DataTypes.STRING(12),
        allowNull: true
    },
    Bairro: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    Estado: {
        type: DataTypes.STRING(2),
        allowNull: true
    },
}, {
    tableName : 'Clientes',
    timestamps: false
});

module.exports = {
    Clientes
};
const { DataTypes } = require('sequelize');
const database = require('../database/db');
const { Endereco } = require('./endereco');

const Clientes = database.sequelize.define('Clientes', {
    Id_cliente:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_endereco: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field : 'id_endereco'
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    cpf: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    contato: {
        type: DataTypes.STRING(13),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    assinante: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
}, {
    tableName : 'Clientes',
    timestamps: false
});

    Clientes.hasOne(Endereco, {
        foreignKey: 'id_endereco',
        as: 'clienteEndereco'
    });

    Endereco.belongsTo(Clientes, {
        foreignKey: 'id_endereco',
        as: 'enderecoCliente'

    });

module.exports = {
    Clientes
};
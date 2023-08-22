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
    Assinante: {
        type: DataTypes.STRING(3),
        allowNull: true
    },
}, {
    tableName : 'Clientes',
    timestamps: false
});

    Clientes.hasMany(Endereco, {
        foreignKey: 'id_endereco'
    });

    Endereco.belongsTo(Clientes, {
        foreignKey: 'id_endereco'
    });

module.exports = {
    Clientes
};
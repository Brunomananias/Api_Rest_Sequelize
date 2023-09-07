const { DataTypes } = require('sequelize');
const database = require('../database/db');
const { Clientes } = require('./Clientes');

const Servicos = database.sequelize.define('servicos', {
    id_servico:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field : 'id_cliente'
    },
    servico: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    dataProcedimento: {
        type: DataTypes.DATE,
        allowNull: true
    },
}, {
    tableName : 'servicos',
    timestamps: false
    
});

Servicos.hasOne(Clientes, {
    foreignKey: 'id_cliente',
    as: 'clienteServico'
});

Clientes.belongsTo(Servicos, {
    foreignKey: 'id_cliente',
    as: 'servicoCliente'

});

module.exports = {
    Servicos
};
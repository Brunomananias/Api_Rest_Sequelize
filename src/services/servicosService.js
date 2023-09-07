const { Servicos } = require("../models/servicos.js");

module.exports = {
    async listar(req, res) {
        return await Servicos.findAll({
            include: 'clienteServico'
        });
    },

    async salvar(req, res) {
        return await Servicos.create({
            servico: req.body.servico,
            preco: req.body.preco,
            dataProcedimento: req.body.dataProcedimento,
        }, {
            include: [{
                association: 'clienteServico'
            }]
        }
        );
    },

    async excluir(id) {
        if (!await Clientes.findByPk(id)) {
            return `Cliente com o id ${id} não encontrada!`
        }
        await Clientes.destroy({
            where: {
                id_cliente : id
            }
        })
        return `Cliente com o id ${id} excluída com sucesso!`
    },

    
    async buscarCliente(id) {
        if (!await Clientes.findByPk(id)) {
            return `Cliente com o id ${id} não encontrada!`
        }
        return await Clientes.findOne({
            include: 'clienteEndereco',
            where: {
                id_cliente : id
            }
        });
    }
}
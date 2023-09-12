const { Servicos } = require("../models/servicos.js");

module.exports = {
    async listar(req, res) {
        return await Servicos.findAll({
            include: 'clienteServico'
        });
    },

    async salvar(req, res) {
        return await Servicos.create({
            id_cliente: req.body.id_cliente,
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
        if (!await Servicos.findByPk(id)) {
            return `Serviço com o id ${id} não encontrada!`
        }
        await Servicos.destroy({
            where: {
                id_servico : id
            }
        })
        return `Serviço com o id ${id} excluída com sucesso!`
    },

    
    async buscarServico(id) {
        if (!await Servicos.findByPk(id)) {
            return `Serviço com o id ${id} não encontrada!`
        }
        return await Servicos.findAll({
            include: 'clienteServico',
            where: {
                id_cliente : id
            }
        });
    }
}